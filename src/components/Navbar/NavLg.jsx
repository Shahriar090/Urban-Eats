import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
const NavLg = () => {
  return (
    <nav className="bg-[#0E1618]">
      {/* upper nav */}
      <div className="upp-nav-container">
        {/* location */}
        <div className="location flex  gap-3">
          <div>
            <h1 className="text-4xl text-[#C3A981]">
              <CiLocationOn />
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="text-[#C3A981]">3125 Maxwell Farm Road</p>
            <p>Roanoke, Portland</p>
          </div>
        </div>
        {/* contact */}
        <div className="contact flex  gap-3">
          <div>
            <h1 className="text-4xl text-[#C3A981]">
              <MdAlternateEmail />
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="text-[#C3A981]">Email Contact</p>
            <p>Basilicorestaurant@gmail.com</p>
          </div>
        </div>
        {/* phone */}
        <div className="phone flex  gap-3">
          <div>
            <h1 className="text-4xl text-[#C3A981]">
              <MdOutlineContactPhone />
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="text-[#C3A981]">Phone Call Us</p>
            <p>+39 399 461 1608</p>
          </div>
        </div>
        <div className="book-now-button">
          <button className="booking-btn">Book A Table</button>
        </div>
      </div>

      {/* lower nav */}
      <div className="lower-nav-container  ">
        <div className="address border-r-2 border-[#C3A981]">
          <h1>address modal</h1>
          <h1>address modal</h1>
          <h1>address modal</h1>
          <h1>address modal</h1>
        </div>
        <div className="nav-items">
          <h1>all nav items</h1>
        </div>
        <div className="search border-l-2 border-[#C3A981]">
          <h1>search here</h1>
          <h1>search here</h1>
          <h1>search here</h1>
          <h1>search here</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavLg;
