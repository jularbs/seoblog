import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeedWidget = ({ galleryData, listData }) => {
  const postCard = (data) => {
    return (
      <div className="post-item">
        <div
          className="photo"
          style={{
            background: `url(${data.photo}) center/cover no-repeat `,
          }}
        ></div>
        <div className="category">{data.category}</div>
        <div className="title">{data.title}</div>
        <div className="date">{data.date}</div>
      </div>
    );
  };

  const listPostCards = () => {
    return galleryData.data.map((post, i) => (
      <div className="col-lg-4" key={i}>
        {postCard(post)}
      </div>
    ));
  };

  const listItem = (data, i) => {
    return (
      <div className="post-item" key={i}>
        <div className="counter">{i + 1}</div>
        <div className="post-details">
          <div className="title">{data.title}</div>
          <div className="category">{data.category}</div>
        </div>
      </div>
    );
  };

  const listListItem = () => {
    return listData.data.map((data, index) => listItem(data, index));
  };

  return (
    <div className="widget-2">
      <div className="section2">
        <div className="trending-widget">
          <div className="hot-header px-3">
            <div className="title">{galleryData.title}</div>
            <div className="link-all">See all</div>
          </div>
          <div className="postlist-container px-3">
            <div className="row">{listPostCards()}</div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="hot-header">
          <div className="title">{listData.title}</div>
          <div className="link-all">See all</div>
        </div>
        <div className="scroll">
            {listListItem()}
        </div>
      </div>
    </div>
  );
};

export default FeedWidget;
