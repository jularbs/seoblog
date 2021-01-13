import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryWidget = ({ category, data, whiteBg }) => {
  const postCard = (post) => {
    return (
      <div className="category-post-item">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${post.photo})`,
          }}
        />
        <div className="title">{post.title}</div>
        <div className="date">{post.date}</div>
      </div>
    );
  };

  const displayPosts = () => {
    return data.map((post, index) => (
      <div className="col-lg-3" key={index}>
        {postCard(post)}
      </div>
    ));
  };

  return (
    <div className="category-widget">
      <div className={whiteBg ? "category-container white__bg" : "category-container"}>
        <div className="category-header">
          <h3 className="category-title">{category}</h3>
          <span className="link-see-all">
            See all
            <FontAwesomeIcon
              icon={["fas", "angle-right"]}
              style={{ marginLeft: "5px" }}
            />
          </span>
        </div>
        <div className="row">
          {displayPosts()}
        </div>
      </div>
    </div>
  );
};

export default CategoryWidget;
