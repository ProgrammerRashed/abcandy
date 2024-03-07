//@ts-nocheck
"use client";
import getJsonData from "@/utils/getJsonData";
import Image from "next/image";
import React from "react";

const SpacialPost = () => {
  const [slide, setSlide] = React.useState(0);
  const rawData = getJsonData()
  const data = rawData.filter(singleData => singleData.tags.includes("spacial"))

  if (!data || data.length === 0) {
    return (
        <div className="w-[580px] h-[300px] bg-gray-200 animate-pulse"></div>
    );
}

if (!data[0]) {
    return (
        <div className="w-[580px] h-[300px] bg-gray-200 animate-pulse"></div>
    );
}


  return (
    <div>
      <div className="w-full text-text-primary min-h-full">
        {/* CARD HEAD */}
        <div className="image-container relative min-h-[300px] max-h-[350px] w-full overflow-hidden">
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
          {/* INDICATORS */}
        <div className="absolute z-50 bottom-3  w-full flex justify-center items-center">
          <div className="indicators bg-[#626870] px-2 py-1 rounded-full inline-block">
            {data[0]?.imageSrc!.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx
                      ? "indicator  h-4 w-4 rounded-full mx-2 bg-white"
                      : "indicator indicator-inactive bg-[#91959b] h-4 w-4 rounded-full mx-2"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </div>
        </div>
        </div>
        {/* CARD BODY */}
        <div className="card-body bg-[#F5F4FB] p-5 min-h-[260px]">
          <div className="publish-meta flex gap-3 my-4">
            <p className="category font-semibold uppercase"> {data[0]?.category}</p>
            <p className="Date">{data[0]?.date}</p>
          </div>
          {/* CARD CONTENT */}
          <div className="content space-y-5">
            <h1 className="text-2xl ">
             {data[0]?.title}
            </h1>
            <p className="text-text-muted space-y-4">
            {data[0]?.content}
            </p>
          </div>

          {/* CARD FOOTER */}
          <div className="mt-5">
         
            {/* AUTHOR DETAILS */}
            <h3 className="my-4 text-text-muted">
              by <span className="font-bold"> {data[0]?.author}</span>
            </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SpacialPost;
