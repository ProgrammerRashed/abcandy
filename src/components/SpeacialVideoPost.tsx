"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const SpacialVideoPost = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const onClose = () => {
    setIsShowModal(false);
  };
  return (
    <div className="w-full text-text-primary h-auto">
      {/* CARD HEAD */}
      <div className="image-container relative min-h-[300px] max-h-[350px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1709456136012-59707ec6217d"
          alt="blog-thumbnail"
          fill
          className="object-cover"
        />
      </div>
      {/* CARD BODY */}
      <div className="card-body bg-[#F5F4FB] p-5 min-h-[260px]">
        <div className="publish-meta flex gap-3 my-4">
          <p className="category font-semibold">DESIGN & CREATIVE</p>
          <p className="Date">10 June 2023</p>
        </div>
        {/* CARD CONTENT */}
        <div className="content space-y-5">
          <h1 className="text-2xl ">
            Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor
            enim massa
          </h1>
        </div>

        {/* CARD FOOTER */}

        <div className="mt-5">
          {/* CTA */}

          <button
            onClick={() => {
              setIsShowModal(!isShowModal);
            }}
            className="text-text-button px-3 py-2 border border-text-button"
          >
            Watch Now
          </button>
        </div>
      </div>
      <Modal isShowModal={isShowModal} onClose={onClose} modalTitle="Playing Video">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CQQc8QyIGl0?si=fZ0Ml-cSQC_ZCIvo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default SpacialVideoPost;
