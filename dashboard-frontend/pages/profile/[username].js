import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";

const UserProfile = ({ user, blogs, query }) => {
  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className="mt-4 mb-4" key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <a className="lead">{blog.title}</a>
          </Link>
        </div>
      );
    });
  };

  const head = () => (
    <Head>
      <title>
        {user.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Blogs by ${user.username}`} />
      <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:title" content={`${user.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Blogs by ${user.username}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/SampleImage.png`}
      />
      <meta
        property="og:image:secure_url"
        content="/static/images/SampleImage.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>{user.name}</h5>
                      <p className="text-muted">
                        Joined {moment(user.createdAt).fromNow()}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        alt="user_profile"
                        className="img img-fluid img-thumbnail mb-3"
                        style={{ maxHeight: "150px", maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="cart-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light">
                    <h5>Recent Blogs by {user.name}</h5>
                  </div>
                  {showUserBlogs()}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="cart-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light">
                    Message {user.name}
                  </div>
                  Contact Form
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default UserProfile;
