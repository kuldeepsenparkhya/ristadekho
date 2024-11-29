import React from "react";
import profile12 from "@/assets/images/12.jpg";
import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";

import { menuList } from "@/utils/ProfileMenus"; // Adjust path as needed

const UserSidebar = () => {
  return (
    <React.Fragment>
      <div>
        <div className="w-64 bg-gray-50 border-r border-gray-200 shadow-[0_1px_12px_-2px_#00000024]">
          <div className="py-4 px-6">
            <a href="/">
              <Image src={profile12} alt="" className="rounded-md " />
            </a>
          </div>
          <div className="mb-10">
            {menuList?.map((item, index) => {
              return (
                <>
                  <a
                    href={item.link}
                    className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    key={index}
                  >
                    {
                      <item.icon className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" />
                    }
                    {item.name}
                  </a>
                </>
              );
            })}
            <a
              href="/"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <IoIosLogOut className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserSidebar;
