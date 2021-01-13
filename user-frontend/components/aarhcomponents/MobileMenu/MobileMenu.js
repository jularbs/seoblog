import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MobileMenu = () => {
  return (
    <React.Fragment>
      <div className="mobilemenu-container">
        <div className="mobilemenu-hamburger-container">
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            style={{ fontSize: "1.2rem" }}
          />
        </div>
        <div className="mobilemenu-logo-container">
          <div className="mobilemenu-logo-background"></div>
          <div className="mobilemenu-logo-image">
            <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
              DZRH
              <FontAwesomeIcon
                icon={["fas", "microphone"]}
                style={{ fontSize: "2rem", color: "white" }}
              />
              NEWS
            </span>
          </div>
        </div>
        <div className="mobilemenu-search-container">
          <FontAwesomeIcon
            icon={["fas", "search"]}
            style={{ fontSize: "1.2rem" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
