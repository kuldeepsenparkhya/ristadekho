"use client";
import React from "react";
import profilePic from "@/assets/images/4.jpg";
import wedding from "@/assets/images/wedding-2.png";

import Image from "next/image";

import { PhotoProvider, PhotoView } from "react-photo-view";

const ImageSliderWithZoom = () => {
  // Array of image sources (full images for the lightbox and thumbnails)
  const images = [
    { fullImage: profilePic.src, thumbnail: profilePic },
    { fullImage: wedding.src, thumbnail: profilePic },
    { fullImage: profilePic.src, thumbnail: profilePic },
    // Add more images here
  ];

  return (
    <React.Fragment>
      <PhotoProvider>
        <div className="image-gallery flex gap-2">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              {/* Wrap each image with PhotoView */}
              <PhotoView src={image.fullImage}>
                <Image
                  className="rounded-lg"
                  alt=""
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  style={{ cursor: "pointer" }}
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </React.Fragment>
  );
};

export default ImageSliderWithZoom;
