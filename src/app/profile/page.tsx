import React from "react";
import avtar from "@/assets/images/4.jpg";
import Image from "next/image";
import LeftProfileMenu from "@/components/LeftProfileMenu";

const page = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="columns-1 text-center">
          <LeftProfileMenu />
          <Image
            className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src={avtar}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="columns-2">
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
