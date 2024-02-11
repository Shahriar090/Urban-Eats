import React from "react";
import { MdOutlineContactPhone } from "react-icons/md";
const Phone = () => {
  return (
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
  );
};

export default Phone;
