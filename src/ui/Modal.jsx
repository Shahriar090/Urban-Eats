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
          "fixed flex items-center justify-center inset-0 z-[999] invisible bg-gray-800/70",
          {
            visible: isModalOpen,
          }
        )}
      >
        {/* modal container */}
        <div
          ref={modalContainerRef}
          className="bg-white w-full max-w-2xl rounded-sm p-2"
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
        <IoClose className="text-4xl h-8 w-8 border border-neutral-700 rounded-full p-1" />
      )}
    </button>
  );
};

const Header = ({ children }) => {
  return <div>{children}</div>;
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;
export default Modal;
