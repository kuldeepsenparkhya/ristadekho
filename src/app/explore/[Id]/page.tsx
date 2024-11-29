"use client";

import React from "react";
import profilePic from "@/assets/images/4.jpg";
import Image from "next/image";

import ImageSliderWithZoom from "@/components/ImageSliderWithZoom";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { CiFacebook, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";

const page = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 bg-gray-200  sticky top-0 h-screen">
          <Image
            src={profilePic}
            alt="Profile picture"
            className="bg-white w-full"
          />
          <div className="flex justify-between text-center">
            <button className="text-center p-6 w-full bg-blue-800 ">
              Chat Now
            </button>
            <button className="text-center p-6 w-full bg-yellow-600  ">
              Send Interest
            </button>
          </div>
        </div>
        {/* ************Right side details */}
        <div className="col-span-8 bg-gray-200">
          <div className="space-y-4">
            <div className="">
              <h3 className="text-xl font-bold text-gray-800 hover:text-pink-700">
                Angelina Jolie
              </h3>
              <div className="lg:flex xs:block  mt-4">
                <ul className="flex gap-4">
                  <li className="bg-slate-800 px-3 py-1 text-xs	rounded-md text-white">
                    B.Sc
                  </li>
                  <li className="bg-slate-800 px-3 py-1 text-xs	rounded-md text-white">
                    IT profession
                  </li>
                  <li className="bg-slate-800 px-3 py-1 text-xs	rounded-md text-white">
                    29 year old
                  </li>
                  <li className="bg-slate-800 px-3 py-1 text-xs	rounded-md text-white">
                    Height:155Cms
                  </li>
                </ul>
              </div>
              <p>About</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text.ciis laborum, magnam nihil
                minus repudiandae esse pariatur?
              </p>
              {/* Contact info */}
              <div className="contact-info">
                <hr className="border-gray-300 mt-4 mb-8" />
                <h3>Photo gallery</h3>
                <div className="w-1/2 justify-center">
                  <ImageSliderWithZoom />
                </div>
                <hr className="border-gray-300 mt-4 mb-8" />
                <h3>Contact info</h3>
                <div className="phone flex">
                  <IoIosPhonePortrait />{" "}
                  <span className="mx-2">Phone:+92 (8800) 68 - 8960</span>
                </div>
                <div className="email flex">
                  <MdOutlineEmail />{" "}
                  <span className="mx-2">Email:angelinajoliewed@gmail.com</span>
                </div>
                <div className="address flex">
                  <FaLocationDot />
                  <span className="mx-2">
                    Address: 28800 Orchard Lake Road, Suite 180 Farmington
                    Hills, U.S.A.
                  </span>
                </div>
              </div>

              {/* Personal info */}
              <div className="personal-info">
                <hr className="border-gray-300 mt-4 mb-8" />
                <h3>Personal information </h3>
              </div>

              {/* Hobbies info */}
              <div className="hobbies-info">
                <hr className="border-gray-300 mt-4 mb-8" />
                <h3>Hobbies </h3>
                <ul className="flex gap-4">
                  <li>Modelling</li>
                  <li>Watching movies</li>
                  <li>Playing volleyball</li>
                  <li>Hangout with family</li>
                  <li>Adventure travel</li>
                  <li>Books reading</li>
                  <li>Music</li>
                  <li>Cooking</li>
                  <li>Yoga</li>
                </ul>
              </div>

              {/* Social media info */}
              <div className="Social-media-info">
                <hr className="border-gray-300 mt-4 mb-8" />
                <h3>Social media</h3>
                <ul className="flex gap-4 ">
                  <li>
                    <CiFacebook size={40} />
                  </li>
                  <li>
                    <FaWhatsapp size={40} />
                  </li>
                  <li>
                    <CiTwitter size={40} />
                  </li>
                  <li>
                    <FaInstagram size={40} />
                  </li>
                  <li>
                    <CiYoutube size={40} />
                  </li>
                  <li>
                    <CiLinkedin size={40} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
