import MainLayout from "../layouts/MainLayout";
import HeroArea from "../components/HeroArea";
import TrendingNewsThree from "../components/TrendingNewsThree";
import ReactPlayer from "react-player";
import FollowUs from "../components/FollowUs";
import BusinessCarousel from "../components/BusinessCarousel";
import CategoryFour from "../components/CategoryFour";
import VIdeoNewsSection from "../components/VIdeoNewsSection";
import InternationalNews from "../components/InternationalNews";
import NewsLetter from "../components/NewsLetter";
import NewsWidget from "../components/NewsWidget";

import TwitterWidget from "../components/TwitterWidget";

import Link from "next/link";

const internationalPosts = [
  {
    photo:
      "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with. The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with.",
    category: "World",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1601551891514-5c7e95478101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
    category: "Nation",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1601360651592-1c7273748894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed enim. Malesuada nunc vel risus commodo. Sit amet nulla facilisi morbi tempus iaculis urna id. Faucibus nisl tincidunt eget nullam non nisi est. Ut placerat orci nulla pellentesque dignissim. Rutrum quisque non tellus orci ac auctor augue mauris. Diam phasellus vestibulum lorem sed risus ultricies. Consequat id porta nibh venenatis cras sed. Ornare massa eget egestas purus viverra accumsan in nisl. Nisl nunc mi ipsum faucibus. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Non sodales neque sodales ut etiam sit amet nisl. Semper risus in hendrerit gravida rutrum. Nisl tincidunt eget nullam non nisi est sit amet facilisis.",
    category: "Health",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1597701508489-537c3b59fb19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
    category: "Entertainment",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1599520556487-b4a849b47480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
    category: "World",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1600454551705-d6e1b013339d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
    category: "World",
  },
];

const Homepage = () => {
  return (
    <>
      <MainLayout>
        <div className="wrapper_welcome">
          <HeroArea></HeroArea>
          <div className="bg4">
            <div className="space-60" />
            <div className="total3 mb30">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <TrendingNewsThree />
                    {/* show ad  */}
                    <div className="banner_area mt60 align-self-center">
                      <Link href="/">
                        <img src="img/bg/banner42.png" alt="banner42" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="vp_container shadow7">
                      <div
                        className="embed-responsive embed-responsive-16by9 mb30"
                        style={{ borderRadius: "5px" }}
                      >
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=ZGuV1bW7Bc8"
                          muted
                          playing={true}
                          width="100%"
                          height="100%"
                          controls
                        />
                      </div>
                    </div>
                    <FollowUs
                      className="padding20 white_bg shadow7"
                      title="Follow Us"
                    />
                    {/* //show ad  */}
                    <div className="banner2 mb30 border-radious5">
                      <Link href="/">
                        <img src="img/bg/banner4.png" alt="banner4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <BusinessCarousel />
                  </div>
                </div>
              </div>
              <VIdeoNewsSection />
              <div className="space-60" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    {internationalPosts.map((item, index) => {
                      return <NewsWidget key={index} item={item} />;
                    })}
                    <Link href="/">
                      <a
                        className="showmore"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          fontFamily: "Montserrat",
                          opacity: ".6",
                          fontWeight: "700",
                          textTransform: "uppercase",
                        }}
                      >
                        Show more
                      </a>
                    </Link>
                  </div>
                  <div className="col-lg-4">
                    <CategoryFour />
                    <NewsLetter
                      titleClass="white"
                      className="news_letter4 border-radious5"
                    />
                    <TwitterWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Homepage;
