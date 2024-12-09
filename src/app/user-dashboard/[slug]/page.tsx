import React from "react";
import avtar from "@/assets/images/4.jpg";
import Image from "next/image";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import EditProfile from "@/components/Modal/EditProfile";

const page = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="">
          <UserSidebar />
          <Image
            className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src={avtar}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <EditProfile />
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
