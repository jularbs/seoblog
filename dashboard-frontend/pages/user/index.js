import Layout from "../../components/Layout";
import Private from "../../components/auth/Private.component";
import Link from 'next/link';
const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-2 pb-2">
              <h2>User Dashboard</h2>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                {/* FIND WAY TO LOAD CCS WITH LINK */}
                <li className="list-group-item">
                  <a href="/user/crud/blog">Create Blog</a>
                </li>
                <li className="list-group-item">
                  <Link href="/user/crud/blogs">
                    <a>Manage Blogs</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/user/update">
                    <a>Update profile</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">Right</div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserIndex;
