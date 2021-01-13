
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainMenu = () => {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between align-items-center mainmenu-container">
          <div className="logo-container">
            <div className="logo-bg"></div>
            <div className="logo-image">
              <span className="logo-red">DZRH</span>
              <FontAwesomeIcon className="mx-1" icon={["fas", "microphone"]} style={{color:"white", fontSize: "30px"}} />
              <span className="logo-black">NEWS</span>
            </div>
          </div>
          <div className="nav-container">
            <div className="nav-item active">Trending</div>
            <div className="nav-item">Nation</div>
            <div className="nav-item">Entertainment</div>
            <div className="nav-item">Lifestyle</div>
            <div className="nav-item">Sports</div>
            <div className="nav-item">International</div>
          </div>
          <div className="search-container">
            <FontAwesomeIcon icon={["fa", "search"]} />
          </div>
        </div>
      </React.Fragment>
    );
}

export default MainMenu;