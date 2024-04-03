"use client";
import React from "react";
import Modal from "./Modal";
import ContactUs from "./ContactUs";

const FeatureCta = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);

  const onClose = () => {
    setIsShowModal(false);
  };
  return (
    <div className="h-full w-full">
      <div className="bg-white p-3 space-y-3 ">
        <p className="text-lg text-text-primary uppercase">
          Do you need any creative service for your business?
        </p>
        <button
          className="px-3 py-2 bg-color-primary text-white"
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          Let&apos;s Talk
        </button>
      </div>
      <Modal
        isShowModal={isShowModal}
        onClose={onClose}
        modalTitle="Contact Us"
      >
        <ContactUs />
      </Modal>
    </div>
  );
};

export default FeatureCta;
