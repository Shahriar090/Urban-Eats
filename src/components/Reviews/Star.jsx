import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
const Star = ({ stars }) => {
  const starRatings = Array.from({ length: 5 }, (elem, index) => {
    // to show half stars
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex justify-center text-[#C3A981] py-5">{starRatings}</div>
  );
};

export default Star;
