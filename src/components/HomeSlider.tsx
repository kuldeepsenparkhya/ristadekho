"use client";

import React from "react";
import { Zoom } from "react-slideshow-image";

import { imagesURs } from "@/assets/images/index";
import Image from "next/image";

const HomeSlider = () => {
  const images = [imagesURs.imgsss.src, imagesURs.whyus1.src];
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <>
            <div
              style={{ position: "relative", width: "100%", height: "100vh" }}
            >
              <Image
                key={index}
                src={each} // Image source (you need to pass a valid image URL or path here)
                alt=""
                layout="fill" // This makes the image fill its parent container
                objectFit="cover" // Optionally, you can control the image scaling, 'cover' is commonly used
                objectPosition="center" // Optionally, you can control the alignment of the image within the container
              />
            </div>
          </>
        ))}
      </Zoom>
    </div>
  );
};

export default HomeSlider;
