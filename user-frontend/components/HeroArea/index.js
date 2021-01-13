import React, { useState } from "react";
import Swiper from "react-id-swiper";

const slider = [
  {
    photo:
      "https://images.unsplash.com/photo-1569331867176-54d0f508083d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3291&q=80",
    // "https://images.unsplash.com/photo-1527567018838-584d3468eb85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    category: "World",
    date: "March 2020",
    title:
      "There Are No Excuses Left for Leaving Climate Change Out of the Debates",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1548585219-8eb7c1801390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80",
    // "https://dzrhnews.com.ph/wp-content/uploads/2020/09/head01-260.jpg",
    category: "Nation",
    date: "March 2020",
    title:
      "DSWD plans to provide Php 15,000 cash grants to small vendors, store owners",
  },
  {
    photo:
      "https://images.theconversation.com/files/137023/original/image-20160908-16611-1gghcis.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    category: "Politics",
    date: "March 2020",
    title:
      "He may have insulted Obama, but Duterte held up a long-hidden looking glass to the US",
  },
  {
    photo:
      "https://coconuts.co/wp-content/uploads/2020/08/Duterte-family-854x540.jpg",
    category: "Health",
    date: "March 2020",
    title:
      "Peeved Duterte denies rumored SG medical trip as Go shares photos of him in Davao City",
  },
];
const HeroArea = () => {
  const [activeIndex, setActiveIndex] = useState("0");
  const params = {
    activeSlideKey: activeIndex,
    effect: "slide",
  };
  return (
    <div className="wrapper_items">
      <div className="wrapper_carousel wlc_slider_demo2">
        <Swiper {...params}>
          {slider.map((item, i) => (
            <div
              key={i}
              className="welcome4_area_wrap wlc_overlay"
              style={{
                background: `url(${item.photo}) center/cover no-repeat`,
              }}
            >
              <div className="welcome4_area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="welcome_txt">
                        <p className="title_meta">
                          {item.category} <span>| {item.date}</span>
                        </p>
                        <h1>{item.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
      <div className="container d-md-block d-none">
        <div className="row">
          <div className="col-12">
            <div className="welcome_list">
              <div className="wlc_slide_demo1 d-flex">
                <div
                  className={`single_news_list ${
                    activeIndex === "0" ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex("0")}
                >
                  <p>
                    <span>01</span> World
                  </p>
                  <h4>
                    There Are No Excuses Left for Leaving Climate Change Out of
                    the Debates
                  </h4>
                </div>
                <div
                  className={`single_news_list ${
                    activeIndex === "1" ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex("1")}
                >
                  <p>
                    <span>02</span> Nation
                  </p>
                  <h4>
                    DSWD plans to provide Php 15,000 cash grants to small
                    vendors, store owners
                  </h4>
                </div>
                <div
                  className={`single_news_list ${
                    activeIndex === "2" ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex("2")}
                >
                  <p>
                    <span>03</span> Politics
                  </p>
                  <h4>
                    He may have insulted Obama, but Duterte held up a
                    long-hidden looking glass to the US
                  </h4>
                </div>
                <div
                  className={`single_news_list ${
                    activeIndex === "3" ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex("3")}
                >
                  <p>
                    <span>04</span> Health
                  </p>
                  <h4>
                    Peeved Duterte denies rumored SG medical trip as Go shares
                    photos of him in Davao City
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
