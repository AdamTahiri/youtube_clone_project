import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import YouTube from "./YouTube.png";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

import "../styles/NavBar.css";

const Navbar = () => {
  const [input, setInput] = useState("");
  let history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await history.push({
      // pathname: `/videos?search=${input}`,
      pathname: `/videos`,
      search: `?search=${input}`,
      state: input
    })
    setInput("");
    console.log(history)
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section>
      <div className="burger_icon">
        <MenuIcon />
      </div>
      <nav>
        <NavLink to="/">
          <img src={YouTube} alt="youtubeLogo" className="youtube_icon" />
        </NavLink>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            placeholder="Search"
          />
            <button className="button">
              <SearchIcon />
            </button>
        </form>
        <NavLink to="/about">
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
