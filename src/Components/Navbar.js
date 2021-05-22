import React from "react";
import { NavLink } from "react-router-dom";
import Homepage from "./Homepage";

const Navbar = () => {
  return (
    <nav>
     
      <NavLink to="youtube">YouTube</NavLink>
      <NavLink to="about">About </NavLink>
      
    </nav>
  );
};

export default Homepage