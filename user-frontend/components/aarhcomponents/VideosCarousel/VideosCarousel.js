import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const testData = [
  {
    photo:
      "https://images.unsplash.com/photo-1594709408142-0773b1213cb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    title:
      "Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…",
    description:
      "The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1601306483417-134e652e544f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    category: "Technology",
    title:
      "Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…",
    description:
      "The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1599520556664-b09417ebfef2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    title:
      "Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…",
    description:
      "The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1591019928690-0221b2d9387b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    title:
      "Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…",
    description:
      "The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1601156130934-1878e5f2f429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    title:
      "Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…",
    description:
      "The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    title:
      "Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…",
    description:
      "The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
];

const VideosCarousel = () => {
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
    slidesPerView: 2,
    spaceBetween: 30,
    // loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };

  return (
    <div className="row">
      <div className="videos-widget">
        <div className="videos-header">TRENDING VIDEOS</div>
        <div className="business_carousel nav_style4 mb20">
          <Swiper ref={swiperRef} {...params}>
            {testData.map((item, i) => (
              <div
                key={i}
                className="business_carousel_items padding20"
                style={{ height: "500px", background: `url(${item.photo})` }}
              >
                <div className="single_international">
                  <p className="meta before">{item.category}</p>
                  <h4>
                    <Link href="/">{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </Swiper>
          <div className="owl-nav">
            <div onClick={goPrev} className="owl-prev">
              <FontAwesomeIcon icon={["fa", "caret-left"]} />
            </div>
            <div onClick={goNext} className="owl-next">
              <FontAwesomeIcon icon={["fa", "caret-right"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosCarousel;
