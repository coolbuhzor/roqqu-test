import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ data }) => {
  const formattedData = data?.current?.map((item) => ({
    x: new Date(item.E).toLocaleTimeString(),
    y: [
      parseFloat(item.k.o),
      parseFloat(item.k.h),
      parseFloat(item.k.l),
      parseFloat(item.k.c),
    ],
  }));
  const series = [
    {
      name: "candle",
      data: formattedData,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "candlestick",
    },
    zoom: {
      enabled: !0,
    },
    title: {
      text: "BTC/USDT",
      align: "left",
      style: {
        color: "white",
      },
    },
    annotations: {
      xaxis: [
        {
          x: " 14:00",
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              fontSize: "12px",
              color: "#fff",
              background: "#00E396",
            },
            orientation: "horizontal",
            offsetY: 7,
            text: "Annotation Test",
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      labels: {
        //   formatter: function (val) {
        //     return dayjs(val).format("MMM DD HH:mm");
        //   },
        // formatter : function (val) {
        //     return
        // }
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Chart;
