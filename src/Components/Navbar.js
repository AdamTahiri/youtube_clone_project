import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
     
      <NavLink to="youtube">YouTube</NavLink>
      <NavLink to="about">About </NavLink>
      
    </nav>
  );
};

export default Navbar