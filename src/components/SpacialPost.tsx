"use client";
import Image from "next/image";
import React from "react";

const SpacialPost = () => {
  const [slide, setSlide] = React.useState(0);
  const images = [
    "https://images.unsplash.com/photo-1709456136012-59707ec6217d",
    "https://picsum.photos/seed/img2/600/400",
    "https://picsum.photos/seed/img3/600/400",
  ];



  return (
    <div>
      <div className="w-full text-text-primary min-h-full">
        {/* CARD HEAD */}
        <div className="image-container relative min-h-[300px] max-h-[350px] w-full overflow-hidden">
          {images.map((item, idx) => {
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
            {images.map((_, idx) => {
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
              Fugiat provident deserunt exercitationem magnam suscipit quasi
              iusto quo aut!
            </p>
          </div>

          {/* CARD FOOTER */}
          <div className="mt-5">
         
            {/* AUTHOR DETAILS */}
            <h3 className="my-4 text-text-muted">
              by <span className="font-bold">Rashed</span>
            </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SpacialPost;
