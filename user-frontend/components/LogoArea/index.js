import React from 'react';
// import {Link} from "react-router-dom";
import Link from "next/link"

const LogoArea = ({className, dark}) => {
    return (
      <div className={`logo_area ${className ? className : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 align-self-center">
              <div className="logo">
                <Link href="/">
                  <img src="img/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="banner1">
                <Link href="#">
                  <img src="img/logo/logo.png" alt="banner" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogoArea;