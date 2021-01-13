import './styles.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const PostTopBar = ({data}) => {
return (
  <React.Fragment>
    <div className="posttopbar-container">
      <div className="posttopbar-main">
        <div className="posttopbar-left">
          <div className="posttopbar-backnav">
            <FontAwesomeIcon icon={["fas", "angle-left"]} />
          </div>
          <div className="posttopbar-image">
            <img src={data.image} alt="" />
          </div>
          <div className="posttopbar-title">{data.title}</div>
        </div>
        <div className="posttopbar-right">
          <div className="posttopbar-type-button">
            <FontAwesomeIcon
              icon={["fas", "expand-arrows-alt"]}
              className="posttype-icons"
            />
          </div>
          <div className="posttopbar-share-buttons">
            <span>share</span>
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="share-icons"
            />
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="share-icons"
            />
            <FontAwesomeIcon
              icon={["fas", "ellipsis-v"]}
              className="share-icons"
            />
          </div>
        </div>
      </div>
      <div className="posttopbar-progess-container"></div>
    </div>
  </React.Fragment>
);

}

export default PostTopBar;