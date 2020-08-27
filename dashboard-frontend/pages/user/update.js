import Layout from "../../components/Layout";
import Private from "../../components/auth/Private.component";
import Link from "next/link";
import ProfileUpdate from "../../components/auth/ProfileUpdate";
const UserProfileUpdate = () => {
  return (
    <Layout>
      <Private>
        <div className="container">
          <div className="row">
            <ProfileUpdate />
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserProfileUpdate;
