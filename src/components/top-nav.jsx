import React from "react";

import { ReactComponent as Notification } from "../assets/svg/Notification.svg";

const TopNav = () => {
  return (
    <div className="w-full flex items-center justify-between h-[100px] bg-[#080F24] absolute top-0 left-0 z-30 pl-[43px] pr-[69px]">
      <h1 className="font-bold text-white">roqqu</h1>

      <div className="flex items-center">
        <div>
          <Notification />
        </div>
        <div className="w-[52px] h-[52px] bg-[#101E48] rounded-full ml-[34px]"></div>
      </div>
    </div>
  );
};

export default TopNav;
