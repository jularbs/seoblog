import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private.component";
import Link from "next/link";
import CreateBlog from "../../../components/crud/createBlog";
const Blog = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-2 pb-2">
              <h2>Create Blog</h2>
            </div>
            <div className="col-md-12">
              <div className="col-md-12">
                <CreateBlog />
              </div>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;