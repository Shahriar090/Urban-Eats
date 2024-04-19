import React from "react";
import { CiSearch } from "react-icons/ci";
import LocationModal from "./LocationModal";
import Location from "./Location";
import Contact from "./Contact";
import Phone from "./Phone";
import Button from "../../ui/Button";
import { navOptions } from "./NavOptions";
import { Link } from "react-router-dom";
const NavLg = () => {
  return (
    <nav className="bg-[#0E1618] w-full h-auto">
      {/* upper nav */}
      <div className="upp-nav-container py-8">
        <Location />
        <Contact />
        <Phone />

        <div className="book-now-button">
          <Button variant="outline">Book A Table</Button>
        </div>
      </div>

      {/* lower nav */}
      <div className="lower-nav-container">
        <div className="address  p-3 border-r border-[#C3A981]">
          <LocationModal />
        </div>
        {/* nav options */}
        <div className="nav-items  p-3 flex gap-10 items-center text-lg">
          {navOptions.map((item, index) => (
            <li key={index} className="">
              <Link>{item.label}</Link>
            </li>
          ))}
        </div>
        <div className="search  p-3 border-l border-[#C3A981]">
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
