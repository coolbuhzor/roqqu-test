/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useMemo } from "react";
import btc from "../assets/svg/btc.svg";
// import TradeViewChart from "react-crypto-chart";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Chart from "../components/chart";

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

const Exchange = () => {
  const [orderData, setOrderData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const socketUrl = "wss://stream.binance.com:9443/ws/btcusdt@kline_1m";

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket(socketUrl);

  const messageHistory = useRef([]);

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastJsonMessage ?? []),
    [lastJsonMessage]
  );

  const fetchData = () => {
    fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT", {
      method: "GET",
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((json) => setOrderData(json))
      .catch((err) => console.log(err));
  };
  const fetchTableData = () => {
    fetch("https://api.binance.com/api/v3/trades?symbol=BTCUSDT", {
      method: "GET",
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((json) => setTableData(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    fetchTableData();
  }, [lastJsonMessage]);

  return (
    <div className="mt-[33px] relative w-full pl-[30px] pr-[20px] flex flex-col">
      <div className="w-full py-[20px] lg:py-[unset] lg:h-[98px] bg-[#0D152E]  rounded-[8px]  lg:grid-cols-6 grid">
        <div className="flex items-center pl-[20px] lg:pl-[unset] lg:justify-center h-full mb-[30px] lg:mb-[unset] ">
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
            className=" h-full border-l border-[#1F2845]   flex items-center pl-[20px] lg:pl-[unset] lg:justify-center"
            key={data.id}
          >
            <div className="flex flex-col ">
              <small className="font-medium text-[12px] leading-[16px] text-[#E4E4FA91] flex lg:self-end">
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
      <div className="flex flex-col lg:flex-row justify-between w-full mt-[27px]">
        <section className="w-[904px] h-full  ">
          <div className="w-full h-[486px] bg-[#080F24] rounded-tr-[10px] rounded-tl-[10px]">
            <div className="flex items-center justify-between w-full pl-[29px] pt-[28px] pr-[19px] text-[16px] leading-[23px] text-[#FFFFFFE8]">
              <p className="font-bold text-[16px] leading-[22px] text-[#FFFFFFE8]">
                Charts
              </p>
              <div className="flex items-center justify-between">
                <p className="bg-[#051955] text-[#FFFFFFE8] text-[14px] leading-[19px] w-[63px] h-[33px] flex items-center justify-center rounded-[5px] mr-[22px]">
                  Price
                </p>
                <p className="text-[Depth] leading-[19px] text-[14px]">Depth</p>
              </div>
            </div>

            <div className="flex py-[16px] justify-between pl-[29px] pr-[19px] rounded-[5px]">
              <div className="flex ">
                <div className="w-[61px] h-[42px] bg-[#21293E41] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  4h
                </div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] ml-[10px] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  4h
                </div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] ml-[10px] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  4h
                </div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] ml-[10px] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  4h
                </div>
              </div>
              <div className="flex ">
                <div className="w-[61px] h-[42px] bg-[#21293E41] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  save
                </div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] ml-[10px] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  save
                </div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] ml-[10px] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  save
                </div>
                <div className="w-[61px] h-[42px] bg-[#21293E41] ml-[10px] rounded-[5px] flex items-center justify-center text-[#E4E4FA]">
                  save
                </div>
              </div>
            </div>
            <div className="relative  h-[500px] w-full overflow-x-scroll">
              <Chart data={messageHistory} />
            </div>
          </div>
          <div className="mt-[19px] w-full bg-[#080F24] h-full rounded-[5px] px-[20px] pb-[20px]">
            <section className="w-ful">
              <p className="font-bold text-[16px] leading-[22px] text-[#FFFFFFE8] text-left mt-[10px]">
                Market Trades
              </p>
              <div className="flex justify-between py-[16px] px-[9px]">
                <h5 className="font-medium text-[12px]  flex flex-1 text-[#E4E4FA91]">
                  TIME
                </h5>
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
              <div className="rounded-[5px]  bg-[#04091C] h-[400px] overflow-y-scroll">
                {tableData.map((data, index) => (
                  <div
                    className="flex h-[24px] items-center justify-between px-[9px]  "
                    key={data.id}
                  >
                    <p className="font-medium flex flex-1 text-[12px] leading-[16px] text-[#FFFFFFE8]">
                      {new Date(data.time).toLocaleTimeString()}
                    </p>
                    <p className="font-medium flex flex-1 text-[12px] leading-[16px] text-[#FF8686]">
                      {data.price}
                    </p>
                    <p className="font-medium text-[12px] flex flex-1 leading-[16px] text-[#FFFFFFE8]">
                      {data.qty}
                    </p>
                    <p className="font-medium text-[12px] flex flex-1 leading-[16px] text-[#FFFFFFE8]">
                      {data.quoteQty}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
        <section className="w-[350px] h-[514px] mt-[50px] lg:mt-[unset] pb-[100px] rounded-[5px] bg-[#080F24] px-[10px] pt-[14px]">
          <p className="pt-[25px] pl-[25p] text-[16px] leading-[23px] text-left text-[#FFFFFFE8]">
            Order Book
          </p>

          <div className="mt-[19px] w-full bg-[#04091C] h-full rounded-[5px]">
            <section>
              <div className="flex justify-between py-[16px] px-[9px]">
                <h5 className="font-medium text-[12px]  flex flex-1 text-[#E4E4FA91]">
                  PRICE(USDT)
                </h5>
                <h5 className="font-medium text-[12px] ml-[10px] flex flex-1 text-[#E4E4FA91]">
                  AMOUNT(BTC)
                </h5>
                <h5 className="font-medium text-[12px]  flex flex-1 text-[#E4E4FA91]">
                  TOTAL (USDT)
                </h5>
              </div>

              {orderData?.asks?.slice(0, 6).map((data, index) => (
                <div
                  className="flex h-[24px] items-center justify-between px-[9px]"
                  key={`${index}`}
                >
                  <p className="font-medium flex flex-1 text-[12px] leading-[16px] text-[#FF8686]">
                    {data[0]}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1 leading-[16px] ml-[10px] text-[#E4E4FA91]">
                    {data[1]}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1 leading-[16px] text-[#E4E4FA91]">
                    {data[1]}
                  </p>
                </div>
              ))}

              <div className="w-full  my-[10px] flex items-center justify-center">
                <p className=" py-[10px] font-bold text-[14px] leading-[19px] text-white">
                  {orderData?.asks?.slice(0, 1)[0][0]}
                </p>
              </div>

              {orderData?.bids?.slice(0, 6).map((data, index) => (
                <div
                  className="flex h-[24px] items-center justify-between px-[9px]"
                  key={`${index}`}
                >
                  <p className="font-medium flex flex-1 text-[12px]  text-[#1AC9A0]">
                    {data[0]}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1 ml-[10px]  text-[#E4E4FA91]">
                    {data[1]}
                  </p>
                  <p className="font-medium text-[12px] flex flex-1  text-[#E4E4FA91]">
                    {data[1]}
                  </p>
                </div>
              ))}
            </section>
          </div>
          <div className="flex flex-col items-center justify-between rounded-[5px] w-full mt-[50px] bg-[#080F24] h-[300px]  pb-[20px]">
            <p className=" text-left w-full pl-[2.5%] text-[16px] text-bold pt-[15px] leading-[23px] text-[#FFFFFFE8]">
              Place Order
            </p>
            <div className="h-[80%] rounded-[5px] w-[95%] bg-[#04091C]  flex flex-col items-center justify-center">
              <p className="text-white text-bold"> Sign in or Create Account</p>
              <p className="text-white">to Continue</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exchange;
