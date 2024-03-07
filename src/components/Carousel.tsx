"use client";
import getJsonData from "@/utils/getJsonData";
import Image from "next/image";
import React from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

export const Carousel = () => {
  const [slide, setSlide] = React.useState(1);
  const button = true;
  const author = false;
 const rawData = getJsonData()
 const data = rawData.filter(singleData => singleData.tags.includes("carousel"))


  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel relative w-full flex justify-center items-center">
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className="flex justify-between gap-[30px]  translate-x-[700px]"
          style={{ transition: "transform 0.5s ease" }}
        >
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                  transition: "transform 0.5s ease",
                }}
                className={
                  slide === idx
                    ? "slide w-[700px] relative z-0"
                    : "slide opacity-50 w-[700px] relative -z-50"
                }
              >
                <Image
                  src={Array.isArray(item.imageSrc) ? item.imageSrc[0] : item.imageSrc || ""}
                  alt={item.title}
                  width={700}
                  height={300}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div>
                  {idx == slide && (
                    <div className="card-body bg-white p-5 text-text-primary">
                      <div className="publish-meta flex gap-3 my-4">
                        <p className="category font-semibold uppercase">
                        {item?.category}
                        </p>
                        <p className="Date !text-text-muted"> {item?.date}</p>
                      </div>
                      {/* CARD CONTENT */}
                      <div className="content space-y-5">
                        <h1 className="text-2xl ">
                        {item?.title}
                        </h1>
                        <p className="!text-text-muted space-y-4">
                        {item?.content}
                        </p>
                      </div>

                      {/* CARD FOOTER */}

                      <div className="mt-5">
                        {/* CTA */}

                        {button && (
                          <button className="text-text-button px-3 py-2 border border-text-button">
                            {item?.button}
                          </button>
                        )}

                       
                      </div>
                    </div>
                  )}
                </div>

                {/* PREV AND NEXT BUTTONS */}
                <div className="absolute z-50 top-0 flex justify-between w-[840px] -translate-x-[70px] translate-y-36">
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
              </div>
            );
          })}
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute z-40 bottom-0 translate-y-16 bg-white px-2 py-1 rounded-full ">
        <div className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx
                    ? "indicator  h-4 w-4 rounded-full mx-2 bg-text-button"
                    : "indicator indicator-inactive bg-[#cdc6e6] h-4 w-4 rounded-full mx-2"
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
