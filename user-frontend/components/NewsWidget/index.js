import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsWidget = ({ item }) => {
  return (
    <div className="business3 padding20 white_bg border-radious5 mb30">
      <div className="single_post post_type12 type20">
        <div
          className="single_post_text"
          style={{ paddingLeft: "0px", paddingRight: "30px" }}
        >
          <div className="row">
            <div className="col-9 align-self-center">
              <div className="meta3">
                <Link href="/">
                  <a
                    style={{
                      fontFamily: "Montserrat",
                      color:"black",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      paddingRight: "5px",
                    }}
                  >
                    {item.category}
                  </a>
                </Link>
                <Link href="/">March 26, 2020</Link>
              </div>
            </div>
            <div className="col-3 align-self-cnter">
              <div className="share_meta4 text-right">
                <ul className="inline">
                  <li>
                    <FontAwesomeIcon
                      icon={["fa", "bookmark"]}
                      style={{ color: "red", opacity: ".2", fontSize: "12px" }}
                    />
                  </li>
                  <li>
                    <Link href="/">
                      <FontAwesomeIcon
                        icon={["fa", "share"]}
                        style={{
                          color: "red",
                          opacity: ".2",
                          fontSize: "12px",
                        }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h4>
            <Link href="/">{item.title}</Link>
          </h4>
          <div className="space-10" />
          <p
            className="post-p"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            {item.description}
          </p>
          <div className="space-20" />
          <Link href="/">
            <a
              className="btn btn-outline-warning"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "12px",
              }}
            >
              Continue Reading
            </a>
          </Link>
        </div>
        <div className="post_img">
          <div className="img_wrap  border-radious5">
            <Link href="/">
              <img src={item.photo} alt="thumb" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsWidget;
