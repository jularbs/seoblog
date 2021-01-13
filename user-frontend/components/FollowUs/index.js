import React from "react";
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";

const FollowUs = ({ className = "", title }) => {
  return (
    <div className={`follow_box widget mb30 ${className}`}>
      <h2 className="widget-title">{title}</h2>
      <div className="social_shares justify-content-between d-flex">
        <Link href="#">
          <a className="single_social social_facebook">
            <span className="follow_icon">
              <FontAwesome name="facebook-f" />
            </span>
            34,456 <span className="icon_text">Fans</span>
          </a>
        </Link>
        <Link href="#">
          <a className="single_social social_twitter">
            <span className="follow_icon">
              <FontAwesome name="twitter" />
            </span>
            34,456 <span className="icon_text">Fans</span>
          </a>
        </Link>
        <Link href="#">
          <a className="single_social social_youtube">
            <span className="follow_icon">
              <FontAwesome name="youtube" />
            </span>
            34,456 <span className="icon_text">Fans</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FollowUs;
