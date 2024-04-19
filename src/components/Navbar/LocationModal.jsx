import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import Modal from "../../ui/Modal";
import logoImg from "../../../src/assets/Banner/logo-ft.png";

const LocationModal = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className=" w-full flex items-center justify-center">
      <button onClick={() => setModal((prev) => !prev)}>
        <CgMenuLeft className="text-3xl text-[#C3A981]" />
      </button>
      <Modal isModalOpen={modal} onClose={handleModalClose}>
        <Modal.Header>
          <div className="logo flex justify-center pb-5">
            <picture>
              <img src={logoImg} alt="Logo" className="" />
            </picture>
          </div>
          <div className="texts text-center px-8 space-y-3 text-[#DFE0E0]">
            <p>
              Drawing on their respective experiences in the hospitality
              industry, the duo imagined a place celebrating.
            </p>
            <p className="text-[#C3A981] text-3xl">+39 399 461 1608</p>
            <p>
              Andé Restaurant 767 5th Avenue, Paris 10021, France
              Brochetterestaurant@gmail.com
            </p>
            <span>Opening Hour</span>
            <p>Mon - Fri : 9.00am - 22.00pm, Holidays : Close</p>
          </div>
          <Modal.CloseButton></Modal.CloseButton>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default LocationModal;
