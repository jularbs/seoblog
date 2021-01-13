import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {PHOTO_ALBUM, VIDEO_LINK, BASIC_ARTICLE} from "../../../utils/constants";
import PostCard from "../PostCard/PostCard";
import PostTopBar from "../PostTopBar/PostTopBar";

const ViewPost = ({ data }) => {
  const TestData = {
    sponsorImage: "",
    sponsorLink: "",
    image:
      "https://assetmetrostyle.blob.core.windows.net/prod/metro.style/media/assets/maja-salvador-metro-30-banner.jpg?ext=.jpg",
    category: "Entertainment",
    postType: "video",
    typeMeta: "50 Photos",
    title:
      "Maja Salvador reveals the one thing that can make her leave showbiz",
    author: "Ralph Jularbal",
    date: "November 14, 2020",
    tags: ["Maja Salvador", "showbiz", "abs-cbn", "entertainment"],
    body:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.&nbsp;</p><p>&nbsp;</p><p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.&nbsp;</p><p>&nbsp;</p><p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.&nbsp;</p><p>&nbsp;</p><p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.&nbsp;</p><p>&nbsp;</p><p>Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales.&nbsp;</p><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.&nbsp;</p><p>&nbsp;</p><p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.&nbsp;</p><p>&nbsp;</p><p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.&nbsp;</p><p>&nbsp;</p><p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.&nbsp;</p><p>&nbsp;</p><p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.&nbsp;</p><p>&nbsp;</p><p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.&nbsp;</p><p>&nbsp;</p><p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.&nbsp;</p><p>&nbsp;</p><p>Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales.&nbsp;</p><p>&nbsp;</p><p>sum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.&nbsp;</p><p>&nbsp;</p><p>Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales.&nbsp;</p><p>&nbsp;</p>",
  };

  const displayTags = () => {
    return TestData.tags.map((tag, index) => {
      return (
        <span className="tag-items" key={index}>
          {tag}
        </span>
      );
    });
  };
  const postTypeButton = () => {
    switch(TestData.postType){
      case PHOTO_ALBUM:
        return (
          <div className="btn btn-info btn-dark">
            <FontAwesomeIcon icon={["far", "images"]} className="mr-2" />
            View Album | 50 Photos
          </div>
        ); 
      case VIDEO_LINK:
        return (
          <div className="btn btn-info btn-dark">
            <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />
            Watch Video | 1:30
          </div>
        );
      case BASIC_ARTICLE:
        break;
    }
  }

  return (
    <React.Fragment>
      <PostTopBar data={TestData} />
      <div
        className="hero-container"
        style={{ background: `url(${TestData.image}) center/cover no-repeat` }}
      >
        <div className="post-nav d-flex align-items-center">
          <FontAwesomeIcon icon={["fas", "angle-left"]} className="icon ml-3" />
          <span className="ml-2">BACK</span>
        </div>
        <div className="sponsor-image d-flex">
          <span className="mr-2">Sponsored by</span>
          <img
            src="https://www.pinclipart.com/picdir/big/105-1059231_epic-jollibee-logo-png-clipart.png"
            alt=""
            width="50px"
          />
        </div>
        <div className="post-meta-button">
          {postTypeButton()}
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-9">
          <div className="vp-post-container">
            <div className="details-container">
              <div className="category">{TestData.category}</div>
              <div className="title">{TestData.title}</div>
              <div className="details-meta">
                <div className="d-flex align-items-center">
                  <div className="vp-author mr-3 d-flex align-items-center">
                    <div className="vp-author-thumbnail"></div>
                    <FontAwesomeIcon
                      icon={["fas", "user-circle"]}
                      className="icon mx-2"
                      style={{ fontSize: "1.5rem" }}
                    />
                    {TestData.author}
                  </div>
                  <div className="vp-date">{TestData.date}</div>
                </div>

                <div className="vp-share-buttons d-flex align-items-center">
                  <span className="mr-2">Share: </span>
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="icon mr-1"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="icon mx-2"
                    style={{ fontSize: "1.5rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="body-container">
              <div dangerouslySetInnerHTML={{ __html: TestData.body }}></div>
            </div>
            <div className="vp-share-buttons d-flex align-items-center my-3">
              <span className="mr-2">Share: </span>
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="icon mr-1"
                style={{ fontSize: "1.5rem" }}
              />
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="icon mx-2"
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <div className="vp-tags">
              <h3 className="display-header">Related Topics</h3>
              {displayTags()}
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-5" style={{ backgroundColor: "white" }}>
          <div className="vp-sidebar-container">
            <div className="ad-container">
              <div
                style={{
                  color: "white",
                  width: "300px",
                  height: "250px",
                  backgroundColor: "black",
                  margin: "1rem auto",
                }}
              >
                MREC
              </div>
            </div>
            <div className="vp-sidebar-relatedstories">
              <div className="display-header mt-3">Related Stories</div>
              <PostCard data={TestData} />
              <PostCard data={TestData} />
              <PostCard data={TestData} />
              <PostCard data={TestData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewPost;
