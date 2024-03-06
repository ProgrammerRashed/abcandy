"use client";
import Image from "next/image";
import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = () => {
  const [slide, setSlide] = React.useState(1);
  const button = true;
  const author = false
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
    <div className="carousel relative w-full border border-red-500 flex justify-center items-center overflow-hidden">
      <div
        className="grid grid-cols-3 gap-5  translate-x-[500px]"
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
              className={slide === idx ? "slide" : "slide opacity-50"}
            >
              <Image src={item.src} alt={item.alt} width={500} height={500} />
              {idx == slide &&   <div className="card-body bg-[#F5F4FB] p-5">
        <div className="publish-meta flex gap-3 my-4">
          <p className="category font-semibold">DESIGN & CREATIVE</p>
          <p className="Date">10 June 2023</p>
        </div>
        {/* CARD CONTENT */}
        <div className="content space-y-5">
          <h1 className="text-2xl ">
            Lorem ipsum dolor sit Lorem ipsum dolor sit{" "}
          </h1>
          <p className="text-text-muted space-y-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi!
            Fugiat provident deserunt exercitationem magnam suscipit quasi iusto
            quo aut!
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
      </div>}
             
            </div>
          );
        })}
      </div>

      {/* PREV AND NEXT BUTTONS */}
      <div className="absolute z-10 top-0 flex justify-between w-[35%] translate-y-36">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>

      {/* INDICATORS */}

      <div className="absolute z-10 bottom-0">
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx
                    ? "indicator bg-gray-500 h-4 w-4 rounded-full mx-2 "
                    : "indicator indicator-inactive bg-slate-300 h-4 w-4 rounded-full mx-2"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};
