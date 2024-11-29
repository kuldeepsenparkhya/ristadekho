"use client";

import LeftSideBar from "@/components/LeftSideBar";
import Image from "next/image";
import React from "react";
import profilePic from "@/assets/images/4.jpg";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  console.log("ggggggggggggggg");

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3  p-4 border-2">
            <LeftSideBar />
          </div>
          <div className="col-span-9 p-4">
            <div className="rhs w-full">
              
              <div className="flex justify-between">
                <h3 className="profiles">Showing 32 profiles</h3>
                <div className="rhs-profiles flex gap-2">
                  <label className="">Sort by:</label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className=" w-[100px] rounded-md border-0 py-1.5 text-yellow-800 shadow-sm ring-1 ring-inset ring-purple-900 focus:ring-2 focus:ring-inset focus:ring-purple-900 sm:max-w-xs sm:text-sm/6"
                  >
                    <option>Select By</option>
                    <option>Newest</option>
                    <option>31 to 40</option>
                    <option>41 to 50</option>
                    <option>51 to 60</option>
                    <option>61 to 70</option>
                    <option>71 to 80</option>
                    <option>81 to 90</option>
                  </select>
                </div>
              </div>

              <div className="cc">
                <hr className="border-gray-300 mt-4 mb-8" />
                <div className="font-sans  bg-white py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className=" bg-gray-100 p-4 rounded-md">
                      <div>
                        <div className="relative w-full">
                          <Image
                            src={profilePic}
                            alt="Profile picture"
                            onClick={() => router.push("/explore/sddf")}
                            className="bg-white w-full h-[250px] object-cover"
                          />
                        </div>

                        <hr className="border-gray-300 mt-4 mb-8" />
                        <div className="space-y-4">
                          <div className="">
                            <div className="">
                              <div className="">
                                <h3
                                  className="text-xl font-bold text-gray-800 hover:text-pink-700"
                                  onClick={() => router.push("/explore/sddf")}
                                >
                                  Angelina Jolie
                                </h3>
                                <div className="flex  mt-4">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" bg-gray-100 p-4 rounded-md">
                      <div className="">
                        <div className="relative w-full">
                          <Image
                            src={profilePic}
                            alt="Profile picture"
                            onClick={() => router.push("/explore/sddf")}
                            className="bg-white w-full h-[250px] object-cover"
                            objectFit="cover"
                          />
                        </div>
                        <hr className="border-gray-300 mt-4 mb-8" />
                        <div className="space-y-4">
                          <div className="">
                            <div className="">
                              <div className="">
                                <h3
                                  className="text-xl font-bold text-gray-800 hover:text-pink-700"
                                  onClick={() => router.push("/explore/sddf")}
                                >
                                  Angelina Jolie
                                </h3>
                                <div className="flex  mt-4">
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
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Page;
