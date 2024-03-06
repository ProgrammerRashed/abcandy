import React, { ReactNode, useEffect } from "react";
import { MdClose } from "react-icons/md";

export interface ModalProps {
  isShowModal: boolean;
  onClose: () => void;
  children: ReactNode;
  modalTitle: string
}

const Modal: React.FC<ModalProps> = ({ isShowModal, onClose, children, modalTitle }) => {
  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = ""; // Restore scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = ""; // Restore scrolling if component unmounts
    };
  }, [isShowModal]);

  if (!isShowModal) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#2C2347] backdrop-blur-sm bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="absolute  min-w-96 bg-white shadow-xl z-50 ">
        <div className="bg-[#2C2347] p-3">
            <p className="text-white text-xl">{modalTitle}</p>
        </div>
        {children}
        <button onClick={onClose} className="absolute top-1 right-0 p-2 ">
          <MdClose className="text-2xl text-white"/>
        </button>
      </div>
    </div>
  );
};

export default Modal;
