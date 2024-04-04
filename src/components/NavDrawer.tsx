"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDrawer}>
        <GiHamburgerMenu/>
      </button>
      <button
        onClick={toggleDrawer}
        className="fixed z-10 inset-0 bg-black opacity-50 w-full h-full cursor-pointer"
        style={{ display: isOpen ? "block" : "none" }}
      ></button>
      <div
        className={`fixed z-20 bg-white text-black top-0 right-0 w-64 h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleDrawer}>
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
        <ul className="flex flex-col gap-3">
        <li className="py-2 px-4 hover:bg-slate-100">About Us</li>
          <li className="py-2 px-4 hover:bg-slate-100">Services</li>
          <li className="py-2 px-4 hover:bg-slate-100">What&apos;s New?</li>
          <li className="py-2 px-4 hover:bg-slate-100">Community</li>
          <li className="py-2 px-4 hover:bg-slate-100">Blog</li>
          <button
            className="bg-color-primary px-5 py-2 text-white  font-semibold"
            onClick={() => {
             
            }}
          >
            Contact Us
          </button>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
