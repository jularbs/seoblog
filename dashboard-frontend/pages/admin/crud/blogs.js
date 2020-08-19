import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin.component";
import ReadBlogs from "../../../components/crud/ReadBlogs";
const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-2 pb-2">
              <h2>Manage Blogs</h2>
            </div>
            <div className="col-md-12">
              <div className="col-md-12">
                <ReadBlogs />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
