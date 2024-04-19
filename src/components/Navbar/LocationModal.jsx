import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const LocationModal = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className=" w-full flex items-center justify-center">
      <Button variant="" onClick={() => setModal((prev) => !prev)}>
        <CgMenuLeft />
      </Button>
      <Modal isModalOpen={modal} onClose={handleModalClose}>
        <Modal.Header>
          <p>This is header</p>
          <Modal.CloseButton></Modal.CloseButton>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default LocationModal;
