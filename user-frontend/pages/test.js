import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryWidget from "../components/aarhcomponents/CategoryWidget/CategoryWidget";
import VideosCarousel from "../components/aarhcomponents/VideosCarousel/VideosCarousel";
import FeedWidget from "../components/aarhcomponents/FeedWidget/FeedWidget";
import VideoEmbed from "../components/aarhcomponents/VideoEmbed/VideoEmbed";
import TopStoriesWidget from "../components/aarhcomponents/TopStoriesWidget/TopStoriesWidget";
import TwitterWidget from "../components/aarhcomponents/TwitterWidget/TwitterWidget";
import ProgramsWidget from "../components/aarhcomponents/ProgramsWidget/ProgramsWidget";
import RadioPlayer from "../components/aarhcomponents/RadioPlayer/RadioPlayer";

const Homepage = () => {
  const categoryData = [
    {
      photo:
        "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
      title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
      date: "October: 29, 2020",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
      title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
      date: "October: 29, 2020",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
      title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
      date: "October: 29, 2020",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
      title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
      date: "October: 29, 2020",
    },
  ];

  const galleryData = {
    title: "What's Hot",
    data: [
      {
        photo:
          "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        photo:
          "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        photo:
          "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        photo:
          "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        photo:
          "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        photo:
          "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
    ],
  };

  const listData = {
    title: "Most read",
    data: [
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
      {
        title: "PBA: Ginebra wins 3rd Jones' Cup Championship in Game 5.",
        category: "Sports",
        date: "October 29, 2020",
      },
    ],
  };

  const topStoriesData = {
    photo:
      "https://images.unsplash.com/photo-1546138823-07da5db6c7fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3200&q=80",
    title:
      "Headline blh blah in the philippines is rising testing lang kung mahaba sobra yung headline kasi baka pumangit.",
    category: "Category",
    date: "November 1, 2020",
  };

  return (
    <div style={{minWidth: "1430px"}}>
      <MainLayout>
        <div className="mt-2"></div>
        <div className="row px-1 no-gutters">
          <div className="col-lg-6 px-1">
            <VideoEmbed src="https://www.youtube.com/embed/951u54TXHgU" />
          </div>
          <div className="twitter-feed px-1">
            <div className="scroll">
              <TwitterWidget />
            </div>
          </div>
          <div className="d-flex col-lg-3 align-items-center flex-column px-1">
            <div
              style={{
                width: "300px",
                height: "250px",
                backgroundColor: "white",
              }}
            >
              <div>AD BANNER</div>
            </div>
            <ProgramsWidget />
          </div>
        </div>
        <div className="row px-1 no-gutters">
          <div className="col-lg-6 px-1">
            <TopStoriesWidget data={topStoriesData} />
          </div>
          <div className="col-lg-3 px-1">
            <div className="mt-2 post-widget-container">
              <div className="post-widget mb-2">
                <div
                  className="photo"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1548584771-b2000f1a1c70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80) center/cover no-repeat",
                  }}
                  alt=""
                />
                <div className="topstories-details w-100">
                  <div className="category">Category</div>
                  <div className="title">
                    Headline blh blah in the philippines is rising testing lang
                    kung mahaba.
                  </div>
                  <div className="meta justify-content-between">
                    <div className="date">October 28, 2020</div>
                    <div className="type justify-content-between">
                      <FontAwesomeIcon icon={["fas", "film"]} />
                      <span className="details">1:05</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-widget">
                <div
                  className="photo"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1546008514-533db9a50349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center/cover no-repeat",
                  }}
                  alt=""
                />
                <div className="topstories-details w-100">
                  <div className="category">Category</div>
                  <div className="title">
                    Headline blh blah in the philippines is rising testing lang
                    kung mahaba.
                  </div>
                  <div className="meta justify-content-between">
                    <div className="date">October 28, 2020</div>
                    <div className="type justify-content-between">
                      <FontAwesomeIcon icon={["far", "newspaper"]} />
                      {/* <span className="details">1:05</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-widget mt-2">
                <div
                  className="photo"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1590231204765-12b10cedb4fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80) center/cover no-repeat",
                  }}
                  alt=""
                />
                <div className="topstories-details w-100">
                  <div className="category">Category</div>
                  <div className="title">
                    Headline blh blah in the philippines is rising testing lang
                    kung mahaba.
                  </div>
                  <div className="meta justify-content-between">
                    <div className="date">October 28, 2020</div>
                    <div className="type justify-content-between">
                      <FontAwesomeIcon icon={["fas", "film"]} />
                      <span className="details">1:05</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex col-lg-3 px-1 justify-content-center">
            <div className="ad-lay mt-2">
              <div
                className="tower"
                style={{ width: "300px", height: "600px" }}
              >
                TOWER BANNER AD
              </div>
            </div>
          </div>
        </div>

        <FeedWidget galleryData={galleryData} listData={listData} />

        <div className="row">
          <div className="d-flex ad-lay justify-content-center w-100 py-3">
            <div
              style={{
                width: "726px",
                height: "90px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Leaderboard
            </div>
          </div>
        </div>

        <VideosCarousel />

        <CategoryWidget category="Sports" data={categoryData} />
        <CategoryWidget category="Entertainment" data={categoryData} whiteBg />
        <CategoryWidget category="Entertainment" data={categoryData} />
        <div className="row">
          <div className="d-flex ad-lay justify-content-center w-100 py-3">
            <div
              style={{
                width: "726px",
                height: "90px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Leaderboard
            </div>
          </div>
        </div>
        <CategoryWidget category="Sports" data={categoryData} />
        <CategoryWidget category="Entertainment" data={categoryData} whiteBg />
        <CategoryWidget category="Entertainment" data={categoryData} />
        <RadioPlayer />
      </MainLayout>
    </div>
  );
};

export default Homepage;
