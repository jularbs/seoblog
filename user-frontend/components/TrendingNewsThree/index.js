import React, {Fragment} from 'react';
import Link from "next/link"
import FontAwesome from "../../components/uiStyle/FontAwesome";

const trendingNews = [
  {
    photo:
      "https://images.unsplash.com/photo-1591695670330-b6576576c40f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1568582420682-27ce02249ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1591893032648-405797082aff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1591153987361-42ecd39bc2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1597466763478-a3d32db80b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1591880856710-a812170a5795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Copa America: Luis Suarez from devastated US",
  },
];
const TrendingNewsThree = () => {
    return (
      <div className="white_bg tranding3 padding20 border-radious5 mb30 shadow7">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2 className="widget-title">Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="single_post post_type3 xs-mb90 post_type15">
              <div className="post_img border-radious5">
                <div className="img_wrap">
                  <Link href="/home-three">
                    <img
                      src="https://images.unsplash.com/photo-1597664105629-9a5d3ec92313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="trend31"
                    />
                  </Link>
                </div>
                <span className="tranding border_tranding">
                  <FontAwesome name="bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="row">
                  <div className="col-9 align-self-cnter">
                    <div className="meta3">
                      <Link href="/">TECHNOLOGY</Link>
                      <Link href="/">March 26, 2020</Link>
                    </div>
                  </div>
                  {/* <div className="col-3 align-self-cnter">
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
                  </div> */}
                </div>
                <div className="space-5" />
                <h4>
                  <Link href="/post1">
                    Japan’s virus puzzled the world luck running out?
                  </Link>
                </h4>
                <div className="space-10" />
                <p className="post-p">
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="popular_items scroll_bar">
              {trendingNews.map((item, i) => (
                <Fragment key={i}>
                  <div className="single_post type10 type16 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <Link href="/">
                          <img src={item.photo} alt="thumb" />
                        </Link>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">
                        <Link href="">TECHNOLOGY</Link>
                        <Link href="">March 26, 2020</Link>
                      </div>
                      <h4>
                        <Link href="/">{item.title}</Link>
                      </h4>
                    </div>
                  </div>
                  {i + 1 < trendingNews.length ? (
                    <Fragment>
                      <div className="space-5" />
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
    );
};

export default TrendingNewsThree;