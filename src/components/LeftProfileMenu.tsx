"use client";

import React from "react";
import Image from "next/image";
import profilePic from "@/assets/images/Fb avtar.jpeg";
const LeftProfileMenu = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftProfileMenu;
