import React from "react";
import { CiSearch } from "react-icons/ci";
import NavOptions from "./NavOptions";
import LocationModal from "./LocationModal";
import Location from "./Location";
import Contact from "./Contact";
import Phone from "./Phone";
const NavLg = () => {
  return (
    <nav className="bg-[#0E1618] w-full h-auto">
      {/* upper nav */}
      <div className="upp-nav-container py-6">
        <Location />
        <Contact />
        <Phone />

        <div className="book-now-button">
          <button className="booking-btn">Book A Table</button>
        </div>
      </div>

      {/* lower nav */}
      <div className="lower-nav-container ">
        <div className="address  p-3 border-r-2 border-[#C3A981]">
          <LocationModal />
        </div>
        {/* nav options */}
        <div className="nav-items  p-3">
          <NavOptions />
        </div>
        <div className="search  p-3 border-l-2 border-[#C3A981]">
          <h1 className="text-4xl text-[#C3A981]">
            {" "}
            <CiSearch />
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavLg;
