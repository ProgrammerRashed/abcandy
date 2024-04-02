"use client"
import React, { useState } from "react"
import Modal from "./Modal"
import ContactUs from "./ContactUs"
const NavigationBar = () => {
    const [isShowModal, setIsShowModal] = React.useState(false) 

    const onClose = () => {
        setIsShowModal(false)
    }
  return (
    <nav className="bg-white py-6 text-text-primary">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <ul className="hidden lg:flex gap-5 items-center">
                <li>About Us</li>
                <li>Services</li>
                <li>What&apos;s New?</li>
            </ul>
            <div className="logo w-full lg:w-auto flex justify-between items-center lg:block">
                <h1>ABCANDY</h1>
                <button className="lg:hidden bg-color-primary px-3 py-3 text-white" onClick={()=>{
                    setIsShowModal(true)
                }}>Contact Us</button>
            </div>
            <ul className="hidden lg:flex flex-col lg:flex-row gap-5 items-center">
                <li>Community</li>
                <li>Blog</li>
                <button className="bg-color-primary px-3 py-3 text-white" onClick={()=>{
                    setIsShowModal(true)
                }}>Contact Us</button>
            </ul>
        </div>
      <Modal isShowModal={isShowModal} onClose={onClose}  modalTitle="Contact Us">
        <ContactUs/>
      </Modal>
    </nav>
  )
}

export default NavigationBar
