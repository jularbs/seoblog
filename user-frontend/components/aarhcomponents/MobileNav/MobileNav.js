import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = () => {
  return (
    <div className="mobile-nav-container">
      <div className="radio-container px-2 py-1">
        <div className="radio-control">
          <div className="radio-button">
            <FontAwesomeIcon
              icon={["fas", "play-circle"]}
              className="icon mr-1"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="radio-details">
            <div className="heading">RESUME LISTENING</div>
            <div className="sub-heading">DZRH 24 Hour PROGRAM Stream</div>
          </div>
        </div>
        <div className="radio-toggle">
          OPEN
          <FontAwesomeIcon icon={["fas", "angle-up"]} className="icon ml-2" />
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mobile-nav-item">
          <FontAwesomeIcon icon={["fas", "home"]} className="icon" />
          <div className="nav-title">Home</div>
        </div>
        <div className="mobile-nav-item">
          <FontAwesomeIcon icon={["fa", "th-large"]} className="icon" />
          <div className="nav-title">Categories</div>
        </div>
        <div className="mobile-nav-item">
          <FontAwesomeIcon icon={["fas", "fire"]} className="icon" />
          <div className="nav-title">Trending</div>
        </div>
        <div className="mobile-nav-item">
          <FontAwesomeIcon icon={["fas", "newspaper"]} className="icon" />
          <div className="nav-title">Most Read</div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
