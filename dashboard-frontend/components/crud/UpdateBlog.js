import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie } from "../../actions/auth";

import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { singleBlog, updateBlog } from "../../actions/blog";

import { Quillmodules, Quillformats } from "../../helpers/quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";

// update Quill, getting warning: See browser console
// Show loading state on update blog

const UpdateBlog = ({ router }) => {
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    title: "",
    displayPhoto: "",
  });

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checkedCat, setCheckedCat] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]);

  const { error, success, formData, title, displayPhoto } = values;
  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initBlog();
    initCategories();
    initTags();
  }, [router]);

  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const initBlog = () => {
    if (router.query.slug) {
      singleBlog(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        }
        setValues({ ...values, title: data.title, displayPhoto: data.photo.link });
        setBody(data.body);
        setCategoriesArray(data.categories);
        setTagsArray(data.tags);
      });
    }
  };

  const setCategoriesArray = (blogCats) => {
    let cat = [];

    blogCats.map((c, i) => {
      cat.push(c._id);
    });
    setCheckedCat(cat);
  };

  const setTagsArray = (blogTags) => {
    let ta = [];

    blogTags.map((t, i) => {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
  };

  const editBlog = (e) => {
    e.preventDefault();
    updateBlog(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          success: `Blog titled ${data.title} is successfully updated`,
          error: "",
          displayPhoto: data.photo.link,
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );

  const updateBlogForm = () => {
    return (
      <form onSubmit={editBlog}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange("title")}
          />
        </div>
        <div className="form-group">
          <ReactQuill
            modules={Quillmodules}
            formats={Quillformats}
            value={body}
            placeholder="Type something amazing..."
            onChange={handleBody}
          />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    );
  };

  const findOutCategory = (id) => {
    const result = checkedCat.indexOf(id);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const findOutTag = (id) => {
    const result = checkedTag.indexOf(id);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleToggle(c._id)}
            checked={findOutCategory(c._id)}
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="P" className="form-check-label">
            {c.name}
          </label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleTagToggle(t._id)}
            checked={findOutTag(t._id)}
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="P" className="form-check-label">
            {t.name}
          </label>
        </li>
      ))
    );
  };

  const handleToggle = (c) => () => {
    setValues({ ...values, error: "" });

    const all = [...checkedCat];
    const clickedCategory = checkedCat.indexOf(c);

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }

    console.log(all);
    setCheckedCat(all);
    formData.set("categories", all);
  };

  const handleTagToggle = (t) => () => {
    setValues({ ...values, error: "" });

    const all = [...checkedTag];
    const clickedTag = checkedTag.indexOf(t);

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }

    setCheckedTag(all);
    formData.set("tags", all);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {showError()}
          {showSuccess()}
          {updateBlogForm()}
        </div>
        <div className="col-md-4">
          <div>
            <div className="form-group">
              <h5>Featured Image</h5>
              {body && (
                <img
                  src={displayPhoto}
                  alt={title}
                  style={{ width: "100%" }}
                />
              )}
              <hr />
              <p className="text-muted mb-1">Max size: 1mb</p>
              <label className="btn btn-outline-info">
                Upload featured image
                <input
                  onChange={handleChange("photo")}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </label>
            </div>
          </div>
          <div>
            <h5>Categories</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div>
            <h5>Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UpdateBlog);
