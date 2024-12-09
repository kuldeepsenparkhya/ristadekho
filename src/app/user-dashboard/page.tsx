import Dashborad from "@/components/Dashborad/Dashborad";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="flex-1">
          <div className="flex  py-3 px-6 bg-gray-50 border-b space-x-6">
            <UserSidebar />
            <Dashborad />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
