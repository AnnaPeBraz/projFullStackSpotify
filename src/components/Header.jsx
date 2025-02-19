// import React from "react";
import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logo do Spotfy" />
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
