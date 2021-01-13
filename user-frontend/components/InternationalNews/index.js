import React from 'react';
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";

const InternationalNews = ({title, showMore, className, data}) => {
    return (
      <div
        className={`business3 padding30 white_bg border-radious5 ${
          className ? className : ""
        }`}
      >
        {title ? <h4 className="widget-title">World News</h4> : null}
        {data.map((item, i) => (
          <div
            key={i}
            className={`single_post post_type12 type20 ${
              i + 1 < data.length ? "mb30" : ""
            }`}
          >
            <div className="post_img">
              <div className="img_wrap    border-radious5">
                <Link href="/">
                  <img src={item.photo} alt="thumb" />
                </Link>
              </div>
            </div>
            <div className="single_post_text">
              <div className="row">
                <div className="col-9 align-self-cnter">
                  <div className="meta3">
                    <Link href="/">TECHNOLOGY</Link>
                    <Link href="/">March 26, 2020</Link>
                  </div>
                </div>
                <div className="col-3 align-self-cnter">
                  <div className="share_meta4 text-right">
                    <ul className="inline">
                      <li>
                        <Link href="/">
                          <FontAwesome name="bookmark" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <FontAwesome name="share" />
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
              <p className="post-p">{item.description}</p>
              <div className="space-10" />
              <Link href="/" className="readmore4">
                <a className="readmore4">Read more</a>
              </Link>
            </div>
          </div>
        ))}
        {showMore ? (
          <Link href="/">
            <a className="showmore">Show more</a>
          </Link>
        ) : null}
      </div>
    );
};

export default InternationalNews;