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
        <div className="w-[580px] h-[300px] bg-gray-200 animate-pulse"></div>
    );
}



  return (
    <div className="w-full text-text-primary h-auto">
      {/* CARD HEAD */}
      <div className=" image-container relative min-h-[300px] max-h-[350px] w-full overflow-hidden">
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
      <div className="card-body bg-[#F5F4FB] p-5 min-h-[310px]">
        <div className="publish-meta flex gap-3 my-4">
          <p className="category font-semibold uppercase">{data?.category}</p>
          <p className="Date">{data?.date}</p>
        </div>
        {/* CARD CONTENT */}
        <div className="content space-y-5">
          <h1 className="text-2xl ">
          {data?.title}
          </h1>
          <p className="text-text-muted space-y-4">
            {data?.content}
            </p>
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
