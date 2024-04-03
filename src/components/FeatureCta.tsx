"use client"
import React from "react";
import Modal from "./Modal";
import ContactUs from "./ContactUs";

const FeatureCta = () => {
  const [isShowModal, setIsShowModal] = React.useState(false) 

  const onClose = () => {
      setIsShowModal(false)
  }
  return (
    
    <div className="relative h-[440px]">
      <div
        className=" bg-white h-[440px] p-3 opacity-70 "
        style={{
          backgroundImage: `url('https://i.ibb.co/kHTR1HM/feature-bg.jpg')`,
          backgroundBlendMode: "normal",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "whitesmoke",
        }}
      ></div>
      <div className="absolute bg-white p-3 space-y-3 bottom-5 translate-x-[15%] !opacity-100 w-[80%] h-[280px]">
        <p className="text-lg text-text-primary uppercase">
          Do you need any creative service for your business?
        </p>
        <button className="px-3 py-2 bg-color-primary text-white" onClick={()=>{
                    setIsShowModal(true)
                }}>
          Let&apos;s Talk
        </button>
      </div>
      <Modal isShowModal={isShowModal} onClose={onClose}  modalTitle="Contact Us">
        <ContactUs/>
      </Modal>
    </div>
  );
};

export default FeatureCta;
