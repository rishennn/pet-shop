import React from "react";

import LogoIco from "../assets/img/svg/header_logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={'/'} className="logo_block">
      <img src={LogoIco} alt="logo of company" className="logo" />
      <div className="logo_info">
        <p className="logo_title">WAGGY</p>
        <p className="logo_text">Pet Shop</p>
      </div>
    </Link>
  );
}

export default Logo;
