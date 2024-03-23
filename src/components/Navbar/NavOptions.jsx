import React from "react";
import { NavLink } from "react-router-dom";

const NavOptions = () => {
  return (
    <ul className="flex space-x-16 items-center text-lg uppercase">
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Menu</NavLink>
      </li>
      <li>
        <NavLink>Popular</NavLink>
      </li>
      <li>
        <NavLink>Todays Special</NavLink>
      </li>
      <li>
        <NavLink>Contact Us</NavLink>
      </li>
    </ul>
  );
};

export default NavOptions;
