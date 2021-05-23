import React from "react";
import { NavLink } from "react-router-dom";
import YouTube from "./YouTube.png";
import InfoIcon from "@material-ui/icons/Info";
import "./NavBar.css";

const Navbar = () => {
  return (
    <section>
      <nav>
        <NavLink className="youtube" to="youtube">
          <img src={YouTube} className="youtube_icon" />
        </NavLink>
        <NavLink to="about">
          <InfoIcon
            viewBox="2 2 20 20"
            height="40px"
            width="40px"
            className="info_icon"
          />
        </NavLink>
      </nav>
      <div className="left_nav_bar"></div>
    </section>
  );
};

export default Navbar;
