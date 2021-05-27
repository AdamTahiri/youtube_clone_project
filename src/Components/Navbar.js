import React from "react";
import { NavLink } from "react-router-dom";
import YouTube from "./YouTube.png";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MenuIcon from '@material-ui/icons/Menu';

import "./NavBar.css";

const Navbar = () => {
  return (
    <section>
      <div className="burger_icon">
        <MenuIcon />
      </div>
      <nav>
        <NavLink to="/">
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
      <div className="youtube_icons">
        <HomeIcon /> 
        <p>Home</p>
        <ExploreIcon /> 
        <p>Explore</p>
        <SubscriptionsIcon /> 
        <p>Subscriptions</p>
        <VideoLibraryIcon /> 
        <p>Library</p>
      </div>
    </section>
  );
};

export default Navbar;
