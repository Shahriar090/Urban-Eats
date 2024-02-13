import React from "react";
import smLogo from "../../../src/assets/logo-sm.png";
import { GiHamburgerMenu } from "react-icons/gi";
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
          <div className="drawer">
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
              <ul className="drawer-items">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
