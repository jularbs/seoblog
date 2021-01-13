import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../public/scss/master.scss";
// import "@fortawesome/fontawesome-free/js/fontawesome";
// import "@fortawesome/fontawesome-free/js/solid";
// import "@fortawesome/fontawesome-free/js/regular";
// import "@fortawesome/fontawesome-free/js/brands";
// import "font-awesome/css/font-awesome.min.css";
import "swiper/swiper.scss";
import "react-modal-video/scss/modal-video.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

import RadioPlayer from "../components/RadioPlayer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <RadioPlayer /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
