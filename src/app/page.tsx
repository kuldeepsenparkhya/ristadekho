"use client";
import HomeSlider from "@/components/HomeSlider";
import Image from "next/image";
import React from "react";
import profile1 from "@/assets/images/12.jpg";
import wedding from "@/assets/images/wedding-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional if using navigation
import "swiper/css/pagination"; // Optional if using pagination

const Home = () => {
  return (
    <React.Fragment>
      <div className="">
        <div className="w-full h-screen">
          <HomeSlider />
        </div>
      </div>
      <section className="py-44">
        <div className="container mx-auto">
          <div className="home-tit">
            <p>trusted brand</p>
            <h2>
              <span>
                Trust by <b className="num">1500</b>+ Couples
              </span>
            </h2>
          </div>

          {/* Multi-item Slider using Swiper.js */}
          <Swiper
            spaceBetween={30}
            slidesPerView={3} // Show 3 items at a time
            loop={true}
            breakpoints={{
              // Make it responsive, showing 1 item on smaller screens
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonialcards border border-[#dbccb9] p-[90px_35px_30px] rounded-[10px] relative mx-[15px]">
                <div className="testminal-image relative">
                  <Image
                    src={profile1}
                    className="w-32 h-32 object-cover"
                    alt="Profile"
                    style={{
                      clipPath: "polygon(50% 0px, 100% 50%, 50% 100%, 0px 50%)",
                    }}
                  />
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam itaque perferendis sit! Soluta consectetur eos dolore
                  voluptate! Optio omnis error, consectetur veniam, repellendus
                  architecto temporibus necessitatibus earum hic accusantium
                  ipsa.
                </p>
                <h4>john doe</h4>
                <span>New York</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonialcards border border-[#dbccb9] p-[90px_35px_30px] rounded-[10px] relative mx-[15px]">
                <div className="testminal-image relative">
                  <Image
                    src={profile1}
                    className="w-32 h-32 object-cover"
                    alt="Profile"
                    style={{
                      clipPath: "polygon(50% 0px, 100% 50%, 50% 100%, 0px 50%)",
                    }}
                  />
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam itaque perferendis sit! Soluta consectetur eos dolore
                  voluptate! Optio omnis error, consectetur veniam, repellendus
                  architecto temporibus necessitatibus earum hic accusantium
                  ipsa.
                </p>
                <h4>john doe</h4>
                <span>New York</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonialcards border border-[#dbccb9] p-[90px_35px_30px] rounded-[10px] relative mx-[15px]">
                <div className="testminal-image relative">
                  <Image
                    src={profile1}
                    className="w-32 h-32 object-cover"
                    alt="Profile"
                    style={{
                      clipPath: "polygon(50% 0px, 100% 50%, 50% 100%, 0px 50%)",
                    }}
                  />
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam itaque perferendis sit! Soluta consectetur eos dolore
                  voluptate! Optio omnis error, consectetur veniam, repellendus
                  architecto temporibus necessitatibus earum hic accusantium
                  ipsa.
                </p>
                <h4>john doe</h4>
                <span>New York</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonialcards border border-[#dbccb9] p-[90px_35px_30px] rounded-[10px] relative mx-[15px]">
                <div className="testminal-image relative">
                  <Image
                    src={profile1}
                    className="w-32 h-32 object-cover"
                    alt="Profile"
                    style={{
                      clipPath: "polygon(50% 0px, 100% 50%, 50% 100%, 0px 50%)",
                    }}
                  />
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam itaque perferendis sit! Soluta consectetur eos dolore
                  voluptate! Optio omnis error, consectetur veniam, repellendus
                  architecto temporibus necessitatibus earum hic accusantium
                  ipsa.
                </p>
                <h4>john doe</h4>
                <span>New York</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Home;
