import React, { useState, useRef } from "react";
import Link from "next/link";
import Swiper from "react-id-swiper"; // NOT WORKING
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = ({ className, dark }) => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  };


  return (
    <div className={`topbar ${className ? className : ""}`} id="top">
      <div className="container">
        <div className="row">
          <div className="col-md-8 align-self-center">
            <div className={`trancarousel_area ${dark ? "white" : ""}`}>
              <p className="trand">Trending</p>
              <div className="nav_style1">
                <Swiper
                  ref={swiperRef}
                  className="trancarousel"
                  {...params}
                >
                  <div className="trancarousel_item">
                    <p>
                      <Link href="/">
                        Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                        Now
                      </Link>
                    </p>
                  </div>
                  <div className="trancarousel_item">
                    <p>
                      <Link href="/">
                        Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                        Now
                      </Link>
                    </p>
                  </div>
                  <div className="trancarousel_item">
                    <p>
                      <Link href="/">
                        Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                        Now
                      </Link>
                    </p>
                  </div>
                </Swiper>
                <div className="navBtns">
                  <button className="navBtn prevBtn" onClick={goPrev}>
                    <FontAwesomeIcon icon={["fas", "angle-left"]} />
                  </button>
                  <button className="navBtn nextBtn" onClick={goNext}>
                    <FontAwesomeIcon icon={["fas", "angle-right"]} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-self-center">
            <div className="top_date_social text-right">
              <div className={`paper_date ${dark ? "white" : ""}`}>
                <p>Thursday, March 26, 2020</p>
              </div>
              <div className={`social1 ${dark ? "white" : ""}`}>
                <ul className="inline">
                  <li>
                    <Link href="#">
                      <a>
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FontAwesomeIcon icon={["fab", "youtube"]} />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
