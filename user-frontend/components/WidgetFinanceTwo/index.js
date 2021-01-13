import React from "react";
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import ReactPlayer from "react-player";

const WidgetFinanceTwo = ({ title, data }) => {
  return (
    <div className="finance mb30 white_bg border-radious5 shadow7 padding20">
      <h3 className="widget-title">DZRH Television</h3>
      <div className="vp_container">
        <div class="embed-responsive embed-responsive-16by9">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-GZhwk81WJA"
            muted
            playing="true"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <ul className="mt10 like_cm">
        <li>
          <Link href="/">
            <FontAwesome name="eye" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FontAwesome name="heart" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FontAwesome name="share" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WidgetFinanceTwo;
