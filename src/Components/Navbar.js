import React from "react";
import { NavLink } from "react-router-dom";
import Homepage from "./Homepage";

const Navbar = () => {
  return (
    <nav>
     
      <NavLink to="YouTube">YouTube</NavLink>
      <NavLink to="About">About </NavLink>
      
    </nav>
  );
};

export default Homepage