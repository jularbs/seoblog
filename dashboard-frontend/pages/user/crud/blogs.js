import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private.component";
import ReadBlogs from "../../../components/crud/ReadBlogs";
import {isAuth} from '../../../actions/auth';

const Blog = () => {
    const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Private>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-2 pb-2">
              <h2>Manage Blogs</h2>
            </div>
            <div className="col-md-12">
              <div className="col-md-12">
                <ReadBlogs username={username} />
              </div>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
