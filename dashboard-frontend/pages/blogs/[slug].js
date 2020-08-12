import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import { singleBlog } from "../../actions/blog";
import { useState } from "react";
import { ButtonGroup } from "reactstrap";
import moment from "moment";
import renderHTML from "react-render-html";

const SingleBlog = ({ router, blog }) => {
  const showBlogCategories = (blog) => {
    return blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-sm btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showBlogTags = (blog) => {
    return blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-3">#{t.name}</a>
      </Link>
    ));
  };

  if (blog == "error_404") {
    return <p>BLOG NOT FOUND</p>;
  } else {
    return (
      <React.Fragment>
        <Layout>
          <main>
            <article>
              <div className="container-fluid">
                <section>
                  <div className="row" style={{ marginTop: "-30px" }}>
                    <img
                      src={`${API}/blog/photo/${blog.slug}`}
                      alt={blog.title}
                      className="img img-fluid featured-image"
                    />
                  </div>
                </section>
                <section>
                  <p className="lead pt-1 pb-1">
                    Written by {blog.postedBy.name} |
                    {` Published ${moment(blog.updatedAt).fromNow()}`}
                  </p>

                  <div className="pb-3">
                    <p>
                      {showBlogCategories(blog)}
                      {showBlogTags(blog)}
                    </p>
                  </div>
                </section>
              </div>
              <div className="container">
                <section>
                  <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                </section>
              </div>
              <div className="container pb-5">
                <h4 className="text-center pb-5 pt-5 h2">Related Blogs</h4>
              </div>
              <div className="container pb-5">
                <h4 className="text-center pb-5 pt-5 h2">Discussion</h4>
              </div>
            </article>
          </main>
        </Layout>
      </React.Fragment>
    );
  }
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data == null) {
      return { blog: "error_404" };
    } else if (data.error) {
      console.log(data.error);
    } else {
      console.log("GET INITIAL PROPS IN SINGLE BLOG", data);
      return { blog: data };
    }
  });
};

export default SingleBlog;
