import React from "react";
import NavLg from "./NavLg";
import NavSm from "./NavSm";
import Container from "../../shared/Container";

const Nav = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <NavLg></NavLg>
      </div>
      <div className="lg:hidden">
        <NavSm></NavSm>
      </div>
    </div>
  );
};

export default Nav;
