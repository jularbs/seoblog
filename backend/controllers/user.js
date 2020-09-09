const User = require("../models/user");
const Blog = require("../models/blog");
const _ = require("lodash");
const { errorHandler } = require("../helpers/dbErrorHandlers");
const formidable = require("formidable");
const fs = require("fs");
const { uploadImageToS3 } = require("../helpers/s3uploader.js");

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.publicProfile = (req, res) => {
  let username = req.params.username;

  let user;
  let blogs;

  User.findOne({ username }).exec((err, userFromDB) => {
    if (err || !userFromDB) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user = userFromDB;
    let userId = user._id;

    Blog.find({ postedBy: userId })
      .populate("categories", "_id name slug")
      .populate("tags", "_id name slug")
      .populate("postedBy", "_id name")
      .limit(10)
      .select(
        "_id title slug excerpt categories tags postedBy createdAt updatedAt"
      )
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        user.photo = undefined;
        user.hashed_password = undefined;
        res.json({
          user,
          blogs: data,
        });
      });
  });
};

exports.testupdatewiths3 = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "photo could not be uplaoded",
      });
    }
    let user = req.profile;
    user = _.extend(user, fields);

    if (fields.password && fields.password.length < 6) {
      return res.status(400).json({
        error: "Password should be minimum 6 characters long",
      });
    }

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb",
        });
      }
      uploadImageToS3(files).then((data) => {
        user.photo.link = data;
        user.photo.contentType = files.photo.type;
        user.save((err, result) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          user.hashed_password = undefined;
          user.salt = undefined;
          res.json(user);
        });
      });
    } else {
      user.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
      });
    }
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "photo could not be uplaoded",
      });
    }
    let user = req.profile;
    user = _.extend(user, fields);

    if (fields.password && fields.password.length < 6) {
      return res.status(400).json({
        error: "Password should be minimum 6 characters long",
      });
    }

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb",
        });
      }

      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }
    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      user.photo = undefined;
      res.json(user);
    });
  });
};

exports.photo = (req, res) => {
  const username = req.params.username;
  User.findOne({ username }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (user.photo.link) {
      return res.send(user.photo.link);
    }
  });
};

exports.pendingUsers = (req, res) => {
  User.find({ regStatus: 0 })
    .select("_id name email createdAt")
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          error:
            "There's a problem getting pending users. Please try refreshing the page.",
        });
      }

      if (!users) {
        return res.status(400).json({
          message: "There are currently no pending users",
        });
      }

      return res.json(users);
    });
};

exports.acceptUser = (req, res) => {
  const { _id } = req.body;

  User.findById(_id, (err, doc) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    doc.regStatus = 1;
    doc.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      this.pendingUsers(req, res);
    });
  });
};

exports.declineUser = (req, res) => {
  const { _id } = req.body;

  User.findOneAndDelete({ _id }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    this.pendingUsers(req, res);
  });
};

exports.removeUser = (req, res) => {
  const { _id } = req.body;

  User.findById(_id, (err, doc) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    doc.regStatus = 2;
    doc.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      this.listUsers(req, res);
    });
  });
};

exports.listUsers = (req, res) => {
  User.find({ regStatus: 1 })
    .select("name email photo role")
    .exec((err, users) => {
      if (err || !users) {
        return res.status(400).json({
          error: "An error occurred while fetching users",
        });
      }

      res.json(users);
    });
};

exports.changeRole = (req, res) => {
  const { _id, role } = req.body;

  User.findById(_id, (err, doc) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    if (!doc) {
      return res.json({ error: "User not found" });
    }

    doc.role = role;
    doc.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      this.listUsers(req, res);
    });
  });
};

exports.listRemovedUsers = (req, res) => {
  User.find({ regStatus: 2 })
    .select("name email photo role")
    .exec((err, users) => {
      if (err || !users) {
        return res.status(400).json({
          error: "An error occurred while fetching users",
        });
      }

      res.json(users);
    });
};