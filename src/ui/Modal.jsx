import React, { createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "../utils/cn";
import { IoClose } from "react-icons/io5";
// modal context
const ModalContext = createContext(null);

const Modal = ({ isModalOpen, onClose, children }) => {
  // modal container reference
  const modalContainerRef = useRef(null);

  //   to close the modal when click outside of the modal container

  const handleOutsideClose = (e) => {
    if (!modalContainerRef.current?.contains(e.target)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsideClose}
        className={cn(
          "fixed flex items-center justify-start inset-0 z-[999] invisible ml-5",
          {
            visible: isModalOpen,
          }
        )}
      >
        {/* modal container */}
        <div
          ref={modalContainerRef}
          className="bg-[#0e1618] w-full max-w-2xl rounded-sm p-5"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal")
  );
};

// modal close button
const CloseButton = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <IoClose className="text-4xl h-8 w-8 text-[#C3A981] absolute right-0 top-0" />
      )}
    </button>
  );
};

const Header = ({ children }) => {
  return <div className="relative">{children}</div>;
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;
export default Modal;
