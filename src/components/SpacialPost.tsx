//@ts-nocheck
"use client";
import getJsonData from "@/utils/getJsonData";
import Image from "next/image";
import React from "react";

const SpacialPost = () => {
  const [slide, setSlide] = React.useState(0);
  const rawData = getJsonData();
  const data = rawData.filter((singleData) =>
    singleData.tags.includes("spacial")
  );

  const nextSlide = () => {
    setSlide(slide === data[0].imageSrc.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data[0].imageSrc.length - 1 : slide - 1);
  };


  const handleDrag = (event) => {

    if(event.clientX > 600){
      nextSlide()
      return
    }


    if(event.clientX < 100){
      prevSlide()
      return
    }
   
  }
  if (!data || data.length === 0) {
    return (
      <div className="w-full sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[39.375rem] h-full sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[33.125rem] bg-gray-200 animate-pulse"></div>
    );
  }

  if (!data[0]) {
    return (
      <div className="w-full sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[39.375rem] h-full sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[33.125rem] bg-gray-200 animate-pulse"></div>
    );
  }

  return (
    <div className="text-text-primary w-full h-full lg:h-[35rem]  xl:w-[39.375rem] xl:h-[33.125rem] overflow-hidden">
      <div 
      onDrag={handleDrag}
      className="image-container relative min-h-[300px] w-full">
        {data[0].imageSrc!.map((item, idx) => {
          return (
            <Image
              key={idx}
              src={item}
              alt={`blog-thumbnail-${idx}`}
              fill
              className={`${slide == idx ? "object-cover" : "hidden"}`}
            />
          );
        })}
        <div className="absolute z-40 bottom-3  w-full flex justify-center items-center">
          <div className="indicators flex justify-center items-center gap-2 px-2 h-[18px]  bg-[#616870] rounded-full">
            {[0, 1, 2].map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx
                      ? "indicator  h-[10px] w-[10px] rounded-full bg-text-button bg-white"
                      : "indicator indicator-inactive bg-[#91959b] h-[10px] w-[10px] rounded-full"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="card-body bg-[#F5F4FB] px-5 py-4 min-h-[260px]">
        <div className="publish-meta flex gap-3 text-sm">
          <p className="category font-medium  uppercase">
            {data[0]?.category}
          </p>
          <p className="Date">{data[0]?.date}</p>
        </div>
        <div className="content pt-4 space-y-2">
          <h1 className="text-2xl font-lora font-medium">{data[0]?.title}</h1>
          <p className="text-text-muted text-base">{data[0]?.content}</p>
        </div>
        <div className="mt-5">
          <h3 className="my-4 text-text-muted text-base">
            by <span className="font-medium"> {data[0]?.author}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SpacialPost;
