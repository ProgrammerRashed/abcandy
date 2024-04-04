"use client";
import getJsonData from "@/utils/getJsonData";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

export const Carousel = () => {
  const [slide, setSlide] = React.useState(2);
  const rawData = getJsonData();
  const data = rawData.filter((singleData) =>
    singleData.tags.includes("carousel")
  );

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);

  };



  const handleDrag = (event:any) => {
console.log(event.clientX)
    if(event.clientX > 600){
      nextSlide()
      return
    }


    if(event.clientX < 100){
      prevSlide()
      return
    }
   
  }
  return (
    <div className="font-dm carousel relative w-full flex justify-center items-center">
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
        
          className="flex justify-center  gap-[30px] translate-x-[345px] md:translate-x-[530px] lg:translate-x-[830px] lg:h-[650px] "
          style={{ transition: "opacity 0.0s"}}
        >
          {[...data, ...data, ...data].map((item, idx) => {
            const adjustedIdx = idx % data.length;
            return (
              <div
             
              onDrag={handleDrag}
            
                key={idx}
                style={{
                  transform:
                slide === 0
                  ? "translateX(0.5%)"
                  : slide === 1
                  ? "translateX(-103.3%)"
                  : slide === 2
                  ? "translateX(-207%)"
                  : "",
                  transition: `opacity 0.8s ${slide === adjustedIdx ? "ease" : "none"}`,

                }}
                className={`slide cursor-move w-[350px] md:w-[500px] lg:w-[800px] relative ${
                  adjustedIdx === slide ? "z-0" : "opacity-0 md:opacity-40 -z-50"
                }`}
              >
                <div className="w-[350px] md:w-[500px] lg:w-[800px] h-[250px] md:h-[300px] lg:h-[400px]">
                <Image
                  src={
                    Array.isArray(item.imageSrc)
                      ? item.imageSrc[0]
                      : item.imageSrc || ""
                  }
                  alt={item.title}
                  width={350}
                  height={400}
                  className="object-cover w-full h-full"
                />
                </div>
                
                <div>
                  {adjustedIdx === slide && (
                    <div className="card-body bg-white px-5  py-4  text-text-primary">
                      <div className="publish-meta flex gap-3 text-sm">
                        <p className="category font-medium uppercase">
                          {item?.category}
                        </p>
                        <p className="Date !text-text-muted">{item?.date}</p>
                      </div>
                      <div className="content  pt-4 space-y-2">
                        <h1 className="text-2xl font-lora font-medium">{item?.title}</h1>
                        <p className="!text-text-muted font-dm text-base hidden lg:block">
                          {item?.content}
                        </p>
                      </div>
                      <div className="mt-5">
                        {item?.button && (
                          <button className="text-text-button px-5 font-medium font-dm py-2 border border-text-button">
                            {item?.button}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {/* PREV AND NEXT BUTTONS */}
                {
                  adjustedIdx === slide &&  <div className="hidden lg:flex absolute z-50 top-0 justify-between w-[490px] md:w-[640px] lg:w-[940px] -translate-x-[70px] translate-y-36">
                  <button
                    onClick={prevSlide}
                    className="bg-text-primary p-3 text-white"
                  >
                    <FaArrowLeftLong className="arrow arrow-left" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-text-primary p-3 text-white"
                  >
                    <FaArrowRight className="arrow arrow-right" />
                  </button>
                </div>
                }
               
              </div>
            );
          })}
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute z-40 -bottom-10 bg-white rounded-full">
        <div className="indicators flex justify-center items-center gap-2 px-2 h-[18px] ">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx
                    ? "indicator  h-[10px] w-[10px] rounded-full bg-text-button"
                    : "indicator indicator-inactive bg-[#cdc6e6] h-[10px] w-[10px] rounded-full"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

