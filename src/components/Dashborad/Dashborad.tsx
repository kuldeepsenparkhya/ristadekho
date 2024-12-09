import React from "react";
import profile1 from "@/assets/images/12.jpg";
import Image from "next/image";
import IntersetRequest from "./IntersetRequest";

const Dashborad = () => {
  return (
    <>
    

      <section>
        <h2 className="text-lg font-extrabold mb-6">New Profiles Matches</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Repeat this block for each profile card */}
          <div className="text-center relative">
            <Image
              src={profile1}
              alt="Profile Image"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 w-[200px] bg-gradient-to-t from-[#251808] to-transparent text-white z-10 rounded-b-lg pb-2">
              <h5 className="text-center">julida</h5>
              <p className="text-center">22 age</p>
            </div>
          </div>
          <div className="text-center relative">
            <Image
              src={profile1}
              alt="Profile Image"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 w-[200px] bg-gradient-to-t from-[#251808] to-transparent text-white z-10 rounded-b-lg pb-2">
              <h5 className="text-center">julida</h5>
              <p className="text-center">22 age</p>
            </div>
          </div>
          <div className="text-center relative">
            <Image
              src={profile1}
              alt="Profile Image"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 w-[200px] bg-gradient-to-t from-[#251808] to-transparent text-white z-10 rounded-b-lg pb-2">
              <h5 className="text-center">julida</h5>
              <p className="text-center">22 age</p>
            </div>
          </div>
          <div className="text-center relative">
            <Image
              src={profile1}
              alt="Profile Image"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 w-[200px] bg-gradient-to-t from-[#251808] to-transparent text-white z-10 rounded-b-lg pb-2">
              <h5 className="text-center">julida</h5>
              <p className="text-center">22 age</p>
            </div>
          </div>
          <div className="text-center relative">
            <Image
              src={profile1}
              alt="Profile Image"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 w-[200px] bg-gradient-to-t from-[#251808] to-transparent text-white z-10 rounded-b-lg pb-2">
              <h5 className="text-center">julida</h5>
              <p className="text-center">22 age</p>
            </div>
          </div>

          {/* Add more profile cards as needed */}
        </div>
        <IntersetRequest />
      </section>
    </>
  );
};

export default Dashborad;
