import './styles.scss';

const PostCard = ({data}) => {
    return (
      <div className="vp-sidebar-postcard">
        <div className="postcard-image">
          <img src={data.image} alt="" />
        </div>
        <div className="postcard-category">{data.category}</div>
        <div className="postcard-title">
          {data.title}
        </div>
        <div className="postcard-date">{data.date}</div>
      </div>
    );
}

export default PostCard;