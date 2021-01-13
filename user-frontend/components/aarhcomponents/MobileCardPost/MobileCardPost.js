import "./styles.scss";
const MobileCardPost = ({ data }) => {
  return (
    <React.Fragment>
      <div className="card-container">
        <div
          className="image-thumbnail"
          style={{ background: `url(${data.image}) center/cover no-repeat` }}
        >
          <div className="image-meta">{data.type}</div>
        </div>
        <div className="post-details">
          <div>
            <div className="category">{data.category}</div>
            <div className="title">{data.title}</div>
          </div>

          <div className="date">{data.date}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileCardPost;
