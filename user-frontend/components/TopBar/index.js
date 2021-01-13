import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {

    return (
      <div className="mbc-topbar">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="topbar-explore">
              
              MBC MEDIA GROUP
              <FontAwesomeIcon
                icon={["fa", "chevron-down"]} style={{marginLeft: "10px"}}
              />
            </div>
            <Button outline color="secondary" size="sm" className="mx-3 my-2 topbar-awu">
              Advertise with us
            </Button>
          </div>
          <div>
            <FontAwesomeIcon
              icon={["far", "user-circle"]}
              style={{ fontSize: "25px", marginRight: "30px" }}
            />
          </div>
        </div>
      </div>
    );
}

export default TopBar;