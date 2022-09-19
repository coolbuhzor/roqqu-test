import React, { useState } from "react";
import { ReactComponent as BigIcon } from "../assets/svg/header-icon.svg";
import { ReactComponent as Bnb } from "../assets/svg/bnb.svg";
import { ReactComponent as Btc } from "../assets/svg/btc.svg";
import { ReactComponent as Usdt } from "../assets/svg/tether.svg";
import { ReactComponent as Eth } from "../assets/svg/eth.svg";

const withdrawalDetail = [
  {
    id: 1,
    text1: "Withdrew USDT",
    text2: "Complete",
    text3: "992333.93USDT",
    date: "Dec 31, 2021",
  },
  {
    id: 2,
    text1: "Withdrew USDT",
    text2: "Complete",
    text3: "992333.93USDT",
    date: "Dec 31, 2021",
  },
  {
    id: 3,
    text1: "Withdrew USDT",
    text2: "Complete",
    text3: "992333.93USDT",
    date: "Dec 31, 2021",
  },
];

const header = [
  { id: 1, text: "Core Assets" },
  { id: 2, text: "Top Gainers" },
  { id: 3, text: "Top Losers" },
  { id: 4, text: "New" },
];

const cryptoList = [
  {
    id: 1,
    icon: <Btc />,
    name: "Bitcoin",
    symbol: "BTC",
    amount: "54372.94USD",
    rate: "+2.43%",
  },
  {
    id: 2,
    icon: <Usdt />,
    name: "Tether",
    symbol: "USDT",
    amount: "1.02 USD",
    rate: "+2.43%",
  },
  {
    id: 3,
    icon: <Eth />,
    name: "Ethereum",
    symbol: "ETH",
    amount: "54372.94USD",
    rate: "+2.43%",
  },
  {
    id: 4,
    icon: <Bnb />,
    name: "Binance Coin",
    symbol: "BNB",
    amount: "54372.94USD",
    rate: "+2.43%",
  },
];
const Dashboard = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="mt-[33px] relative w-full pl-[30px] pr-[20px] flex justify-between">
      <section className="w-[904px] ">
        <div className=" w-full bg-gradient-to-r from-[#2733C4] to-[#9F19D1] h-[358px] rounded-[16px] pl-[38px] pr-[41px] pt-[43px]">
          <div className="text-left text-white uppercase">JANUARY 2, 2022</div>
          <div className="flex w-full justify-between items-start mt-[34px]">
            <div className="flex flex-col items-start">
              <h1 className="max-w-[485px] text-white text-[30px] text-left leading-[43px]">
                Welcome to Roqqu’s Decentralized Exchange
              </h1>
              <p className="text-[16px] leading-7 text-left w-[445px] text-[#E8E9EBCC] mt-[16px]">
                With an easy-to-use interface, we provide industry-leading
                security and deep liquidity
              </p>
              <button className="bg-[#030303] w-[228px] h-[60px] mt-[16px] text-white rounded-[8px]">
                Learn More
              </button>
            </div>
            <BigIcon />
          </div>
        </div>
        <div className="border-b mt-[53px] border-[#0E1326]  flex ">
          {header.map((data) => (
            <p
              className={`pr-[15px] pl-[15px] cursor-pointer ${
                active === data.id
                  ? "text-[#6E97F5] border-b-2 border-[#6E97F5] pb-[18px]"
                  : "text-[#91A0CED8]"
              }`}
              onClick={() => setActive(data.id)}
              key={data.id}
            >
              {data.text}
            </p>
          ))}
        </div>

        <div className="pt-[40px] grid grid-cols-2 ">
          {cryptoList.map((data) => (
            <div
              className="w-[371px] h-[103px] bg-[#080F24] mb-[26px] pl-[18px] flex justify-between pt-[23px] rounded-[5px]"
              key={data.id}
            >
              <div className="flex">
                {data.icon}
                <div className="text-left ml-[15px]">
                  <p className="font-bold text-[16px] leading-[22px] text-[#FFFFFFE8] ">
                    {data.name}
                  </p>
                  <p className="font-normal text-[14px] leading-[19px] text-[#FFFFFFE8]">
                    {data.symbol}
                  </p>
                </div>
              </div>
              <div className="text-right mr-[33px]">
                <p className="text-bold text-[16px] leading-[22px] text-white">
                  {data.amount}
                </p>
                <p className="text-[#1AC9A0] text-[12px] leading-[16px]">
                  {data.rate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[350px] min-h-[638px] h-[738px] pb-[100px] fixed right-[20px] rounded-[5px] bg-[#080F24] px-[10px] pt-[14px] overflow-y-scroll">
        {/* top section */}
        <div className=" w-full flex flex-col item-start h-[287px] bg-[#04091C] rounded-[8px]">
          <p className="w-full mt-[34px] pl-[24px] text-[12px] leading-[17px] text-[#FFFFFFE8] text-left">
            WALLET BALANCE
          </p>
          <div className="mt-[55px] flex flex-col justify-center ">
            <p className="w-[58px] h-[30px] bg-[#D17300] rounded-[18px] flex items-center justify-center self-center font-bold text-[14px] leading-[19px] text-white">
              BTC
            </p>
            <p className="text-900 text-[30px] leading-[41px] text-white">
              0.2993029
            </p>
            <p className="font-medium text-[15px] leading-[20px] text-[#1AC9A0]">
              3,700 USD
            </p>
            <button className="w-[121px] h-[42px] self-center bg-[#0165FF] font-bold text-[16px] leading-[22px] text-white tracking-[-0.4px] mt-[29px] rounded-[8px]">
              Withdraw
            </button>
          </div>
        </div>
        {/* second section */}
        <div className="w-full mt-[48px]">
          <p className="text-left text-normal text-[18px] leading-[26px] text-[#FFFFFFE8] mb-[20px]">
            Latest Activities
          </p>
          {withdrawalDetail.map((data) => (
            <div
              className="w-full h-[103px] rounded-[5px] bg-[#04091C] pl-[37px] pr-[16px] flex pt-[18px] mb-[14px]"
              key={data.id}
            >
              <div className="w-[46px] flex items-center justify-center h-[46px] bg-[#4848483C] rounded-full mr-[19px]">
                0
              </div>
              <div className="text-left">
                <p className="font-bold text-[14px] leading-[19px] text-[#FFFFFFE8]">
                  {data.text1}
                </p>
                <p className="font-bold text-[14px] leading-[19px] text-[#13A583] my-[5px]">
                  {data.text2}
                </p>
                <p className="font-bold text-[14px] leading-[19px] text-[#FFFFFFE8] tracking-[0px]">
                  {data.text3}
                </p>
              </div>
              <p className="text-[12px] leading-[16px] text-[#91A0CED8] ml-[19px]">
                {data.date}
              </p>
            </div>
          ))}
        </div>
        <p className="font-medium text-[#BFC6DECB] my-[19px]">
          View All Activity
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
