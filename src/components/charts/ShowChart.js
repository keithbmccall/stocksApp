import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import SmallHeading from "../tools/SmallHeading";
import classes from "./ShowChart.module.css";

const ShowChart = props => {
  const { chartData, clickHandler } = props;
  const data = chartData
    ? chartData.filter(data => data.close > -1)
    : undefined;
  const closingPrice = data[data.length - 1] && data[data.length - 1].close;
  //

  return (
    <div>
      <SmallHeading className={["text-center", classes.LastPrice].join(" ")}>
        ${closingPrice && closingPrice.toFixed(2)}
      </SmallHeading>
      <div className={classes.ButtonsHolder}>
        <button
          type="button"
          className="btn btn-dark"
          data-timeframe="1d"
          onClick={e => clickHandler(e)}
        >
          1 Day
        </button>
        <button
          type="button"
          className="btn btn-dark"
          data-timeframe="1m"
          onClick={e => clickHandler(e)}
        >
          Month
        </button>
        <button
          type="button"
          className="btn btn-dark"
          data-timeframe="1y"
          onClick={e => clickHandler(e)}
        >
          Year
        </button>
      </div>
      <div className={[classes.ChartBackground, "rounded"].join(" ")}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#333ffe" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#333ffe" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" />
            <YAxis
              domain={[
                dataMin => Math.floor(dataMin - dataMin * 0.01),
                dataMax => Math.floor(dataMax + dataMax * 0.01)
              ]}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="close"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default ShowChart;
