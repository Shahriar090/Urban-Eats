import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-12 md:mt-14 lg:mt-44">
      {children}
    </div>
  );
};

export default Container;
