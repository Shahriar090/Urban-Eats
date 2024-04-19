import React from "react";
import smLogo from "../../../src/assets/logo-sm.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { navOptions } from "./NavOptions";
import { Link } from "react-router-dom";
const NavSm = () => {
  return (
    <nav>
      <div className="nav-sm-container">
        <div className="nav-logo">
          <picture>
            <img src={smLogo} alt="" className="w-3/12 md:w-3/6" />
          </picture>
        </div>
        {/* drawer */}
        <div className="drawer-container">
          <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="">
                <GiHamburgerMenu className="text-4xl text-[#C3A981]" />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="drawer-items">
                {/* Sidebar content here */}

                <div className="nav-items  p-3 flex flex-col gap-5 text-lg">
                  {navOptions.map((item, index) => (
                    <li key={index} className="">
                      <Link>{item.label}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
