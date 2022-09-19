import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import TopNav from "./top-nav";
import { ReactComponent as Books } from "../assets/svg/Book.svg";
import { ReactComponent as Chart } from "../assets/svg/chart.svg";
import { ReactComponent as Wallet } from "../assets/svg/Wallet.svg";
import { ReactComponent as Pulse } from "../assets/svg/Pulse.svg";
import { ReactComponent as Fire } from "../assets/svg/Fire.svg";
import { ReactComponent as Settings } from "../assets/svg/Settings-alt.svg";
import { ReactComponent as Notification } from "../assets/svg/Notification.svg";
// import

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(1);

  const menuItem = [
    {
      id: 1,
      path: "/",
      name: "Home",
      icon: <Wallet />,
    },
    {
      id: 2,
      path: "/exchange",
      name: "Exchange",
      icon: <Chart />,
    },
    {
      id: 3,
      path: "/wallets",
      name: "Wallets",
      icon: <Wallet />,
    },
    {
      id: 4,
      path: "/prices",
      name: "Prices",
      icon: <Books />,
    },
    {
      id: 5,
      path: "/activities",
      name: "Activities",
      icon: <Pulse />,
    },
    {
      id: 6,
      path: "/promotions",
      name: "Promotions",
      icon: <Fire />,
    },
    {
      id: 7,
      path: "/settings",
      name: "Settings",
      icon: <Settings />,
    },
    {
      id: 8,
      path: "/notifications",
      name: "Notifications",
      icon: <Notification />,
    },
  ];
  return (
    <div className="w-full min-h-[800px] h-screen  ">
      <TopNav />
      <div className="flex justify-between w-full h-full ">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={`h-full z-20  pl-[15px] pr-[18px] fixed  top-0 left-0  pt-[130px]  bg-[#080F24] transition ease-in-out  ${
            isOpen ? "w-[248px]" : "w-[89px]"
          } `}
        >
          {menuItem.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={`flex w-full pl-[15px] py-[20px] ${
                isActive === item.id
                  ? " bg-[#111A33] rounded-[8px] text-[#FFFFFFD8]"
                  : " bg-[none] text-[#91A0CED8]  "
              }`}
              onClick={() => setIsActive(item.id)}
            >
              <div className="">{item.icon}</div>
              <div className={`pl-[37px]  ${isOpen ? "block" : "hidden"}`}>
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main className="pt-[100px] ml-[98px] w-full h-full  overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SideBar;
