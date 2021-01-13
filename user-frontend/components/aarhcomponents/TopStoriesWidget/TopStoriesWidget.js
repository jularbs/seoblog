import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopStoriesWidget = ({ data }) => {
    return (
      <div className="my-2 topstories-widget">
        <div
          className="photo"
          style={{
            background: `url(${data.photo}) center/cover no-repeat`,
          }}
          alt=""
        />
        <span className="category-overlay">TOP STORIES</span>
        <div className="topstories-details w-100">
          <div className="category">{data.category}</div>
          <div className="title">{data.title}</div>
          <div className="meta justify-content-between">
            <div className="date">{data.date}</div>
            <div className="type justify-content-between">
              <FontAwesomeIcon icon={["far", "images"]} />
              <span className="details">12 Images</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopStoriesWidget;
