import React from "react";
import btc from "../assets/svg/btc.svg";
import TradeViewChart from "react-crypto-chart";

const Exchange = () => {
  const header = [
    {
      id: 1,
      text: "18372.99 USDT",
      head: "Last Price",
    },
    {
      id: 2,
      text: "18372.99 USDT",
      head: "High",
    },
    {
      id: 3,
      text: "18372.99 USDT",
      head: "Low",
    },
    {
      id: 4,
      text: "18372.99 USDT",
      head: "Low",
    },
    {
      id: 5,
      text: "+3.04%",
      head: "24h Change",
    },
  ];

  const tableData = [
    { id: 1, row1: "128299.304781", row2: "5.304781", row3: "5.304781" },
    { id: 1, row1: "128299.304781", row2: "5.304781", row3: "5.304781" },
    { id: 1, row1: "128299.304781", row2: "5.304781", row3: "5.304781" },
    { id: 1, row1: "128299.304781", row2: "5.304781", row3: "5.304781" },
    { id: 1, row1: "128299.304781", row2: "5.304781", row3: "5.304781" },
    { id: 1, row1: "128299.304781", row2: "5.304781", row3: "5.304781" },
  ];
  return (
    <div className="mt-[33px] relative w-full pl-[30px] pr-[20px] flex flex-col">
      <div className="w-full h-[98px] bg-[#0D152E]  rounded-[8px]  grid-cols-6 grid">
        <div className="flex items-center justify-center h-full ">
          <img src={btc} alt="btc-logo" className="w-[33px] mr-[9px]" />
          <div className="text-left">
            <p className="font-bold text-[16px] leading-[22px] text-[#FFFFFFE8]">
              BTC /USDT
            </p>
            <small className="font-medium text-[12px] leading-[16px] text-[#E4E4FA91]">
              Bitcoin
            </small>
          </div>
        </div>

        {header.map((data) => (
          <div
            className="h-full border-l border-[#1F2845] flex items-center justify-center"
            key={data.id}
          >
            <div className="flex flex-col ">
              <small className="font-medium text-[12px] leading-[16px] text-[#E4E4FA91] flex self-end">
                {data.head}
              </small>
              <p
                className={`font-bold text-[16px] leading-[22px]  pt-[5px] ${
                  data.id === 1 || data.id === 5
                    ? "text-[#1AC9A0]"
                    : "text-[#E4E4FA]"
                }`}
              >
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-[27px]">
        <section className="w-[904px] h-full  ">
          <div className="w-full h-[486px] bg-[#080F24] rounded-tr-[10px] rounded-tl-[10px]">
            <div className="flex items-center justify-between w-full pl-[29px] pt-[28px] pr-[19px] text-[16px] leading-[23px] text-[#FFFFFFE8]">
              <p>Charts</p>
              <div className="flex items-center justify-between">
                <p className="bg-[#051955] text-[#FFFFFFE8] text-[14px] leading-[19px] w-[63px] h-[33px] flex items-center justify-center rounded-[5px] mr-[22px]">
                  Price
                </p>
                <p className="text-[Depth] leading-[19px] text-[14px]">Depth</p>
              </div>
            </div>

            <div className="flex py-[16px] justify-between pl-[29px] pr-[19px] rounded-[5px]">
              <div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] flex items-center justify-center text-[#E4E4FA]">
                  4h
                </div>
              </div>
            </div>
            <div className="relative  h-[350px]">
              <TradeViewChart
                containerStyle={{
                  minHeight: "300px",
                  minWidth: "400px",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                chartLayout={{
                  layout: {
                    backgroundColor: "#04091C",
                    textColor: "#AFAFB4E8",
                  },
                  timeScale: {
                    borderColor: "#485c7b",
                    timeVisible: true,
                    secondsVisible: false,
                  },
                }}
                pair="BTCNGN"
                interval="4h"
              />
            </div>
          </div>
        </section>
        <section className="w-[350px] h-[514px] pb-[100px] rounded-[5px] bg-[#080F24] px-[10px] pt-[14px]">
          <p className="pt-[25px] pl-[25p] text-[16px] leading-[23px] text-left text-[#FFFFFFE8]">
            Order Book
          </p>

          <div className="mt-[19px] w-full bg-[#04091C] h-full rounded-[5px]">
            <section>
              <div className="flex justify-between py-[16px] px-[9px]">
                <h5 className="font-medium text-[12px]  flex flex-1 text-[#E4E4FA91]">
                  PRICE(USDT)
                </h5>
                <h5 className="font-medium text-[12px] flex flex-1 text-[#E4E4FA91]">
                  AMOUNT(BTC)
                </h5>
                <h5 className="font-medium text-[12px]  flex flex-1 text-[#E4E4FA91]">
                  TOTAL (USDT)
                </h5>
              </div>

              {tableData.map((data) => (
                <div
                  className="flex h-[24px] items-center justify-between px-[9px]"
                  key={data.id}
                >
                  <p className="font-medium flex flex-1 text-[12px] leading-[16px] text-[#FF8686]">
                    {data.row1}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1 leading-[16px] text-[#E4E4FA91]">
                    {data.row2}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1 leading-[16px] text-[#E4E4FA91]">
                    {data.row3}
                  </p>
                </div>
              ))}

              <div className="w-full  my-[10px] flex items-center justify-center">
                <p className=" py-[10px] font-bold text-[14px] leading-[19px] text-white">
                  128299.304781 USDT
                </p>
              </div>

              {tableData.map((data) => (
                <div
                  className="flex h-[24px] items-center justify-between px-[9px]"
                  key={data.id}
                >
                  <p className="font-medium flex flex-1 text-[12px]  text-[#1AC9A0]">
                    {data.row1}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1  text-[#E4E4FA91]">
                    {data.row2}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1  text-[#E4E4FA91]">
                    {data.row3}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
      <div className="flex justify-between w-full mt-[27px] "></div>
    </div>
  );
};

export default Exchange;
