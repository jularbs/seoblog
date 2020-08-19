import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin.component";
import UpdateBlog from "../../../components/crud/UpdateBlog";
const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-2 pb-2">
              <h2>Update Blog</h2>
            </div>
            <div className="col-md-12">
              <div className="col-md-12">
                <UpdateBlog />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
