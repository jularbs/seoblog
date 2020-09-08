import { useState, useEffect } from "react";
import { getCookie, updateUser } from "../../actions/auth";
import { getProfile, update } from "../../actions/user";

// TO FIX
// TO BE ADDED: ->> ADD CONFIRM OLD PASSWORD BEFORE CHANGING NEW PASSWORD. IMPLEMENT WITH CALLBACK OR VALIDATION
// TO BE ADDED: show UI if image is selected / show a preview image for chosen files
// TO BE ADDED: SET TIMEOUT FOR REQUEST TO 5 SECONDS
// CLEAN UP CODE / REFACTOR CODE

const ProfileUpdate = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    about: "",
    error: false,
    success: false,
    loading: false,
    photoAvailable: false,
    userData: "",
    displayPhoto: "",
  });

  const token = getCookie("token");
  
  const {
    username,
    name,
    email,
    password,
    about,
    error,
    success,
    loading,
    photoAvailable,
    userData,
    displayPhoto,
  } = values;

  const init = () => {
    getProfile(token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          username: data.username,
          name: data.name,
          email: data.email,
          about: data.about,
          userData: new FormData(),
        });
        if (data.photo) {
          setValues({
            ...values,
            username: data.username,
            name: data.name,
            email: data.email,
            about: data.about,
            userData: new FormData(),
            displayPhoto: data.photo.link,
            photoAvailable: true,
          });
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    userData.set(name, value);
    setValues({
      ...values,
      [name]: value,
      userData,
      success: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });
    update(token, userData).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
          loading: false,
        });
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            username: data.username,
            name: data.name,
            email: data.email,
            about: data.about,
            success: true,
            loading: false,
          });
          if (data.photo) {
            setValues({
              ...values,
              username: data.username,
              name: data.name,
              email: data.email,
              about: data.about,
              success: true,
              loading: false,
              displayPhoto: data.photo.link,
              photoAvailable: true,
            });
          }
        });
      }
    });
  };

  const profileUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-info">
          Update Profile Photo
          <input
            onChange={handleChange("photo")}
            type="file"
            accept="image/*"
            hidden
          />
        </label>
      </div>
      <div className="form-group">
        <label className="text-muted">Username</label>
        <input
          onChange={handleChange("username")}
          type="text"
          value={username}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          value={name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="text"
          value={email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">About</label>
        <textarea
          onChange={handleChange("about")}
          type="text"
          value={about}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
          className="form-control"
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showSuccess = () =>
    success ? (
      <div className="alert alert-success">Profile updated successfully.</div>
    ) : (
      ""
    );

  const showPhoto = () => {
    if (photoAvailable) {
      return (
        <img
          src={displayPhoto}
          alt="user_profile"
          className="img img-fluid img-thumbnail mb-3"
          style={{ maxHeight: "auto", maxWidth: "100%" }}
        />
      );
    } else {
      return <span>No Photo Available</span>;
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">{showPhoto()}</div>
          <div className="col-md-8 mb-5">
            {showSuccess()}
            {showError()}
            {showLoading()}
            {profileUpdateForm()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileUpdate;
