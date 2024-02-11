import React from "react";
import { CgMenuLeft } from "react-icons/cg";
const LocationModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=""
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <h1 className="text-4xl text-[#C3A981]">
          <CgMenuLeft />
        </h1>
      </button>
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#182125] text-[#DFE0E0]">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LocationModal;
