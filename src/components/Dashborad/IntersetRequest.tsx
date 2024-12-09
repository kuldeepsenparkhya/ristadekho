"use client";

import React, { useState } from "react";
import profile1 from "@/assets/images/12.jpg";
import Image from "next/image";

const IntersetRequest = () => {
  const [activeTab, setActiveTab] = useState(0); // Default tab index is 0

  return (
    <div>
      <div className="mt-4">
        {/* Tabs */}
        <div className="flex border-b border-gray-300">
          <button
            className={`px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none ${
              activeTab === 0
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(0)}
          >
            New requests
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none ${
              activeTab === 1
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Accept requests
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none ${
              activeTab === 2
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Denay request
          </button>
        </div>

        {/* Tab Panels */}
        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          {activeTab === 0 && (
            <section>
              <div className="flex justify-between">
                <div>
                  <Image
                    src={profile1}
                    alt="Profile Image"
                    width={150}
                    height={120}
                    className=" rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 pl-6 pr-8">
                  <h1 className="text-xl font-semibold">John Smith</h1>
                  <ol className="flex gap-5">
                    <li className="flex items-center text-sm space-x-3">
                      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                      <span>
                        City: <strong>Illinois</strong>
                      </span>
                    </li>
                    <li className="flex items-center text-sm space-x-3">
                      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                      <span>
                        Age: <strong>21</strong>
                      </span>
                    </li>
                    <li className="flex items-center text-sm space-x-3">
                      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                      <span>
                        Height: <strong>5.7</strong>
                      </span>
                    </li>
                    <li className="flex items-center text-sm space-x-3">
                      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                      <span>
                        Job: <strong>Working</strong>
                      </span>
                    </li>
                  </ol>
                  <ol className="list-none mt-3">
                    <li className="flex items-center text-sm space-x-3">
                      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                      <span>Request on: 10:30 AM, 18 August 2024</span>
                    </li>
                  </ol>
                  <button className="mt-4 text-blue-600 hover:underline">
                    View Full Profile
                  </button>
                </div>
                <div className="inline-block space-x-2 ">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-green-500 rounded-md text-sm hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-red-500 border border-red-500 rounded-md text-sm hover:bg-red-100"
                  >
                    Deny
                  </button>
                </div>
              </div>
            </section>
          )}
          {activeTab === 1 && <p>Content for Tab 2</p>}
          {activeTab === 2 && <p>Content for Tab 3</p>}
        </div>
      </div>
    </div>
  );
};

export default IntersetRequest;
