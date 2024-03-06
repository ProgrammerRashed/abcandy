"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

export const Carousel = () => {
  const [slide, setSlide] = React.useState(1);
  const button = true;
  const author = false;
  const data = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
  ];

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
                  src={item.src}
                  alt={item.alt}
                  width={700}
                  height={300}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div>
                  {idx == slide && (
                    <div className="card-body bg-white p-5">
                      <div className="publish-meta flex gap-3 my-4">
                        <p className="category font-semibold">
                          DESIGN & CREATIVE
                        </p>
                        <p className="Date">10 June 2023</p>
                      </div>
                      {/* CARD CONTENT */}
                      <div className="content space-y-5">
                        <h1 className="text-2xl ">
                          Lorem ipsum dolor sit Lorem ipsum dolor sit
                        </h1>
                        <p className="text-text-muted space-y-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. In, modi! Fugiat provident deserunt
                          exercitationem magnam suscipit quasi iusto quo aut!
                        </p>
                      </div>

                      {/* CARD FOOTER */}

                      <div className="mt-5">
                        {/* CTA */}

                        {button && (
                          <button className="text-text-button px-3 py-2 border border-text-button">
                            Watch Now
                          </button>
                        )}

                        {/* AUTHOR DETAILS */}
                        {author && (
                          <h3 className="mt-3 text-text-muted">
                            by <span className="font-bold">Rashed</span>
                          </h3>
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
      <div className="absolute z-50 bottom-0 translate-y-16 bg-white px-2 py-1 rounded-full ">
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
