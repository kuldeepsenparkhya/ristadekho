"use client";
import HomeSlider from "@/components/HomeSlider";
import Image from "next/image";
import React from "react";
import profile1 from "@/assets/images/12.jpg";
import wedding from "@/assets/images/wedding-2.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <i className="fas fa-chevron-left"></i>, // Left arrow icon
    nextArrow: <i className="fas fa-chevron-right"></i>, // Right arrow icon
  };
  return (
    <React.Fragment>
      <div className="">
        <div className="w-full h-screen">
          <HomeSlider />
        </div>
      </div>
      <section>
        <Slider {...sliderSettings}>
          <div className="our-serivce-card">
            <div className="card-image">
              <Image src={profile1} alt="Profile" />
            </div>
            <div className="contain-box">
              <Image src={wedding} alt="Profile" />
              <div className="card-data">
                <h4>All Services</h4>
                <p>1200+ Profiles</p>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </React.Fragment>
  );
};
export default Home;
