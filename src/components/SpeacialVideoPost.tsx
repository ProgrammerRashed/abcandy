"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
import getJsonData from "@/utils/getJsonData";
import { FaRegPlayCircle } from "react-icons/fa";

const SpacialVideoPost = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const onClose = () => {
    setIsShowModal(false);
  };

  const rawData = getJsonData()
  const data = rawData.filter(singleData => singleData.tags.includes("video"))[0]

  if (!data ) {
    return (
        <div className="w-[630px] h-[530px] bg-gray-200 animate-pulse"></div>
    );
}



  return (
    <div className="w-[630px] h-[530px] text-text-primary overflow-hidden">
      {/* CARD HEAD */}
      <div className=" image-container relative w-[630px] h-[300px]">
        <Image
         src={Array.isArray(data.imageSrc) ? data.imageSrc[0] : data.imageSrc || ""}
          alt="blog-thumbnail"
          fill
          className="object-cover"
        />
        <div className="absolute right-3 bottom-4 text-white flex gap-2 justify-center items-center">
          <p>Watch Now</p>
        <FaRegPlayCircle className="text-2xl" />
          </div>
      </div>
      {/* CARD BODY */}
      <div className="card-body bg-[#F5F4FB] px-5 py-4 min-h-[310px]">
        <div className="publish-meta flex gap-3 text-sm">
          <p className="category font-medium uppercase ">{data?.category}</p>
          <p className="Date">{data?.date}</p>
        </div>
        {/* CARD CONTENT */}
        <div className="content pt-5">
          <h1 className="text-2xl font-lora font-medium">
          {data?.title} Lorem ipsum dolor sit amet.
          </h1>
       
        </div>

        {/* CARD FOOTER */}

        <div className="mt-5">
          {/* CTA */}

          <button
            onClick={() => {
              setIsShowModal(!isShowModal);
            }}
            className="text-text-button  px-5 font-medium font-dm py-2 border border-text-button"
          >
            Watch Now
          </button>
        </div>
      </div>
      <Modal isShowModal={isShowModal} onClose={onClose} modalTitle="Playing Video">
        <div>
          <iframe
          className="lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[200px]"
            src={data?.videoSrc}
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
