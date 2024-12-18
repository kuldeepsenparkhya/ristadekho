"use client";

import React, { useState } from "react";
import avtar from "@/assets/images/4.jpg";
import Image from "next/image";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import EditProfile from "@/components/Modal/EditProfile";
import { BsEye, BsHeart } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import profile1 from "@/assets/images/12.jpg";
import Profilecardprogressbar from "@/components/Profilecardprogressbar";

const page = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Sidebar (25% width on medium and larger screens) */}
          <div className="md:col-span-3 lg:col-span-3">
            <UserSidebar />
          </div>

          <div className="md:col-span-9 lg:col-span-9">
            <div className="grid md:grid-cols-12 gap-6">
              {/* Profile Image Section */}

              <div className="md:col-span-8 lg:col-span-8">
                <h2 className="text-xl font-semibold mb-4">Profiles status</h2>
                <div className="bg-white rounded-lg p-5 shadow-md ">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <Image src={profile1} alt="Profile" />
                    </div>
                    <a
                      href="/user-profile-edit"
                      className="bg-gray-800 text-white px-4 py-2 w-full text-center hover:bg-gray-700 transition-colors"
                    >
                      Edit profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 lg:col-span-4">
                {/* Profile Status Section */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Profiles status</h2>
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-gray-500 hover:bg-gray-100 p-2 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                          <ul className="py-1">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Edit profile
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                View profile
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Profile visibility settings
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <Profilecardprogressbar />

                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-5">
                    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
                      <BsHeart className="text-red-500" size={20} />
                      <div>
                        <b className="block text-sm">12</b>
                        <span className="text-xs text-gray-600">Likes</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
                      <BsEye className="text-blue-500" size={20} />
                      <div>
                        <b className="block text-sm">12</b>
                        <span className="text-xs text-gray-600">Views</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
                      <FaHandshake className="text-green-500" size={20} />
                      <div>
                        <b className="block text-sm">12</b>
                        <span className="text-xs text-gray-600">Interests</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
                      <FaHandshake className="text-purple-500" size={20} />
                      <div>
                        <b className="block text-sm">12</b>
                        <span className="text-xs text-gray-600">Clicks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
