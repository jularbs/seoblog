const Blog = require("../models/blog");
const Category = require("../models/category");
const Tag = require("../models/tag");
const User = require("../models/user");
const formidable = require("formidable");
const slugify = require("slugify");
const stripHtml = require("string-strip-html");
const _ = require("lodash");
const { smartTrim } = require("../helpers/blog.js");
const { errorHandler } = require("../helpers/dbErrorHandlers");
const { uploadImageToS3, uploadTos3 } = require("../helpers/s3uploader.js");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();

  form.multiples = true;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload",
      });
    }

    const {
      title,
      body,
      categories,
      tags,
      status,
      postType,
      videoLink,
      album,
      albumName,
    } = fields;

    if (!title || !title.length) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    // if (!body || body.length < 200) {
    //   return res.status(400).json({
    //     error: "Content too short. Content should be at least 200 characters",
    //   });
    // }

    if (!categories || categories.length === 0) {
      return res.status(400).json({
        error: "Category is required",
      });
    }

    let blog = new Blog();
    blog.status = status;
    blog.title = title;
    blog.body = body;
    blog.excerpt = smartTrim(
      stripHtml(body).substring(0, 300),
      280,
      " ",
      "..."
    );
    blog.slug = slugify(title).toLowerCase();
    blog.mtitle = `${title} | ${process.env.APP_NAME}`;
    blog.mdesc = stripHtml(body).substring(0, 150);
    blog.postedBy = req.user._id;

    //categories and tags
    let categoryArr = categories && categories.split(",");
    let tagArr = tags && tags.split(",");

    blog.postType = postType;
    blog.videoLink = videoLink;

    const albumContainer = JSON.parse(album);
    if (album.length > 0) {
      blog.album = albumContainer;
      blog.albumName = albumName;
    }

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image too large. ( > 1MB ).",
        });
      }

      uploadTos3(files.photo, "featuredimage").then((data) => {
        blog.photo.link = data;
        blog.photo.contentType = files.photo.type;

        blog.save((err, result) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }

          Blog.findByIdAndUpdate(
            result._id,
            {
              $push: {
                categories: categoryArr,
              },
            },
            {
              new: true,
            }
          ).exec((err, result) => {
            if (err) {
              return res.status(400).json({
                _location: "categories",
                error: errorHandler(err),
              });
            } else {
              if (tagArr.length === 0) {
                res.json(result);
              } else {
                Blog.findByIdAndUpdate(
                  result._id,
                  {
                    $push: {
                      tags: tagArr,
                    },
                  },
                  {
                    new: true,
                  }
                ).exec((err, result) => {
                  if (err) {
                    return res.status(400).json({
                      _location: "tags",
                      error: errorHandler(err),
                    });
                  } else {
                    res.json(result);
                  }
                });
              }
            }
          });
        });
      });
    } else {
      return res.status(400).json({
        error: "No image is selected.",
      });
    }
  });
};

exports.list = (req, res) => {
  Blog.find({})
    .populate("categories", "_id name slug")
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select(
      "_id title slug excerpt categories tags postedBy postType createdAt updatedAt"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Blog.findOne({ slug })
    .populate("categories", "_id name slug")
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select(
      "_id status title photo body slug mtitle mdesc categories tags postType albumName videoLink album postedBy createdAt updateAt"
    )
    .exec((err, data) => {
      if (err) {
        console.error("IN ERROR: ", err);
        return res.json({
          error: errorHandler(err),
        });
      }

      res.json(data);
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Blog.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }

    res.json({
      message: "Blog deleted successfully",
    });
  });
};

exports.listAllCategoriesTags = (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let blogs;
  let categories;
  let tags;

  Blog.find({})
    .populate("categories", "_id name slug")
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username profile photo")
    .sort({ updatedAt: -1 })
    .skip(skip)
    .limit(limit)
    .select(
      "_id status title photo slug excerpt categories tags postType postedBy createdAt updatedAt"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      blogs = data;

      Category.find({}).exec((err, c) => {
        if (err) {
          return res.json({
            error: errorHandler(err),
          });
        }
        categories = c;

        Tag.find({}).exec((err, t) => {
          if (err) {
            return res.json({
              error: errorHandler(err),
            });
          }
          tags = t;

          res.json({
            blogs,
            categories,
            tags,
            size: blogs.length,
          });
        });
      });
    });
};

//implement s3 on update
exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Blog.findOne({ slug }).exec((err, oldBlog) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "Image could not upload",
        });
      }

      let slugBeforeMerge = oldBlog.slug;
      oldBlog = _.merge(oldBlog, fields);
      oldBlog.slug = slugBeforeMerge;

      const {
        body,
        categories,
        tags,
        status,
        album,
        postType,
        videoLink,
      } = fields;

      if (status) {
        oldBlog.status = status;
      }

      if (body) {
        oldBlog.excerpt = smartTrim(
          stripHtml(body).substring(0, 300),
          280,
          " ",
          "..."
        );
        oldBlog.mdesc = stripHtml(body).substring(0, 150);
      }

      if (categories) {
        oldBlog.categories = categories.split(",");
      }

      if (tags) {
        oldBlog.tags = tags.split(",");
      }

      if (postType) oldBlog.postType = postType;
      if (videoLink) oldBlog.videoLink = videoLink;

      if (album) {
        const albumContainer = JSON.parse(album);
        if (album.length > 0) {
          oldBlog.album = albumContainer;
        }
      }

      if (files.photo) {
        if (files.photo.size > 1000000) {
          return res.status(400).json({
            error: "Image too large. ( > 1MB ).",
          });
        }
        uploadImageToS3(files).then((data) => {
          oldBlog.photo.link = data;
          oldBlog.photo.contentType = files.photo.type;
          oldBlog.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err),
              });
            }
            res.json(result);
          });
        });
      } else {
        //no photo
        oldBlog.save((err, result) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          res.json(result);
        });
      }
    });
  });
};

exports.photo = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Blog.findOne({ slug })
    .select("photo")
    .exec((err, blog) => {
      if (err || !blog) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      res.set("Content-Type", blog.photo.contentType);

      return res.send(blog.photo.data);
    });
};

exports.listRelated = (req, res) => {
  // console.log(req.body.blog);
  let limit = req.body.limit ? parseInt(req.body.limit) : 3;
  const { _id, categories } = req.body.blog;

  Blog.find({ _id: { $ne: _id }, categories: { $in: categories } })
    .limit(limit)
    .populate("postedBy", "_id name username profile")
    .select("title photo slug excerpt postedBy createdAt updatedAt")
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Blogs not found",
        });
      }
      res.json(blogs);
    });
};

exports.listSearch = (req, res) => {
  console.log(req.query);
  const { search } = req.query;

  if (search) {
    Blog.find(
      {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { body: { $regex: search, $options: "i" } },
        ],
      },
      (err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json(blogs);
      }
    ).select("-photo -body");
  }
};

exports.listByUser = (req, res) => {
  User.findOne({ username: req.params.username }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    let userId = user._id;
    Blog.find({ postedBy: userId })
      .populate("categories", "_id name slug")
      .populate("tags", "_id name slug")
      .populate("postedBy", "_id name username")
      .select("_id title slug postedBy createdAt updatedAt")
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json(data);
      });
  });
};

exports.listByCategory = (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 10;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let id = req.body.id;

  Blog.find({ categories: id })
    .populate("categories", "_id name slug")
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .sort({ updatedAt: -1 })
    .skip(skip)
    .limit(limit)
    .select("_id title slug photo postType postedBy createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.uploadImage = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "There was a problem with uploading the image.",
      });
    }

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image too large. ( > 1MB ).",
        });
      }

      uploadImageToS3(files).then((data) => {
        res.json({ location: data });
      });
    } else {
      return res.status(400).json({
        error: "No image is selected.",
      });
    }
  });
};

exports.init = async (req, res) => {
  const categories = await Category.find({}).select("_id name slug").exec();

  const getPostsByCatID = (id) => {
    return new Promise((resolve, reject) => {
      Blog.find({ categories: id })
        .populate("categories", "_id name slug")
        .sort({ updatedAt: -1 })
        .skip(0)
        .limit(4)
        .select("_id title slug photo album postType createdAt updatedAt")
        .exec((error, data) => {
          return resolve(data);
        });
    });
  };

  const asyncGetPostsByCatID = async (id) => {
    return getPostsByCatID(id);
  };

  const getAllPostsByCategory = await Promise.all(
    categories.map(async (category) => ({
      categoryID: category._id,
      categoryName: category.name,
      categorySlug: category.slug,
      posts: await asyncGetPostsByCatID(category.id),
    }))
  );

  res.json(getAllPostsByCategory);
};

exports.mobinit = (req, res) => {
  Blog.find({})
    .populate("categories", "_id name slug")
    .sort({ updatedAt: -1 })
    .skip(0)
    .limit(15)
    .select("_id title slug photo categories postType createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.getByPostType = async (req, res) => {
  const postType = req.params.postType;

  Blog.find({ postType: postType })
    .populate("categories", "_id name slug")
    .sort({ updatedAt: -1 })
    .skip(0)
    .limit(8)
    .select("_id title slug photo videoLink postType createdAt updatedAt")
    .exec((error, data) => {
      res.json(data);
    });
};

exports.getLatest = async (req, res) => {
  Blog.find({})
    .populate("categories", "_id name slug")
    .sort({ updatedAt: -1 })
    .skip(0)
    .limit(4)
    .select("_id title slug photo postType postType createdAt updatedAt")
    .exec((error, data) => {
      res.json(data);
    });
};

exports.getTrendingPosts = (req, res) => {
  res.json(req.queries);
};
