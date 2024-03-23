import React from "react";
import { MdAlternateEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="contact flex  gap-3">
      <div>
        <h1 className="text-4xl text-[#C3A981]">
          <MdAlternateEmail />
        </h1>
      </div>
      <div className="flex flex-col">
        <p className="text-[#C3A981] text-lg font-medium">Email Contact</p>
        <p className="text-[#DFE0E0]">Basilicorestaurant@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
