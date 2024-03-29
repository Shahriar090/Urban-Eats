import React from "react";
import { CiLocationOn } from "react-icons/ci";
const Location = () => {
  return (
    <div className="location flex  gap-3">
      <div>
        <h1 className="text-4xl text-[#C3A981]">
          <CiLocationOn />
        </h1>
      </div>
      <div className="flex flex-col">
        <p className="text-[#C3A981] text-lg font-medium">
          3125 Maxwell Farm Road
        </p>
        <p className="text-[#DFE0E0]">Roanoke, Portland</p>
      </div>
    </div>
  );
};

export default Location;
