import React, {Fragment} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const videoPosts = [
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
];
const VIdeoNewsSection = () => {
    return (
      <div className="v4video yellow_bg section-padding2">
        <div className="container">
          <h3
            className="mb-3"
            style={{ color: "white", fontFamily: "Montserrat" }}
          >
            DZRH DIGITAL EXCLUSIVES
          </h3>
          <div className="row">
            <div className="col-12">
              <div className="tatal_videos4">
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="tatal_video4"
                      style={{
                        background: `url(https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center/cover no-repeat`,
                      }}
                    >
                      <div className="video4_content">
                        <Link href="/">
                          Investors explain corona impact on consumer startups
                        </Link>
                        <div className="video4_video">
                          <div className="video4_icon">
                            <FontAwesomeIcon
                              icon={["fa", "play"]}
                              style={{
                                color: "white",
                                marginLeft: "5px",
                              }}
                            />
                          </div>
                          <h6>
                            BUSINESS <span>March 26, 2020</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="video4_list scroll_bar padding20">
                      {videoPosts.map((item, i) => (
                        <Fragment key={i}>
                          <div className="single_video_list">
                            <div className="video_list_author">
                              <FontAwesomeIcon
                                icon={["fa", "play-circle"]}
                                style={{
                                  color: "red",
                                  opacity: ".4",
                                  fontSize: "28px",
                                  position: "absolute",
                                  left: "0",
                                  bottom: "3",
                                }}
                              />
                              <h6>
                                Business <span>May 2020</span>
                              </h6>
                            </div>
                            <h4>
                              <Link href="/">{item.title}</Link>
                            </h4>
                          </div>
                          {i + 1 < videoPosts.length ? (
                            <Fragment>
                              <div className="space-15" />
                              <div className="border4" />
                              <div className="space-15" />
                            </Fragment>
                          ) : null}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default VIdeoNewsSection;