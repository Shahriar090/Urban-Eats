import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-8 md:mt-14 lg:mt-28">
      {children}
    </div>
  );
};

export default Container;
