import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private.component";
import UpdateBlog from "../../../components/crud/UpdateBlog";
const Blog = () => {
  return (
    <Layout>
      <Private>
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
      </Private>
    </Layout>
  );
};

export default Blog;
