import "./styles.scss";

const MobileHero = ({data}) => {

    return (
      <React.Fragment>
        <div className="hero-container">
          <div
            className="image-thumbnail"
            style={{ background: `url(${data.image}) center/cover no-repeat` }}
          >
              <div className="hero-meta">
                  {data.type}
              </div>
          </div>
          <div className="post-details">
              <div className="category">
                  {data.category}
              </div>
              <div className="title">
                {data.title}
              </div>
              <div className="date">{data.date}</div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default MobileHero;