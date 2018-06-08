import React, { Fragment } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
//
const PreviewChart = props => {
  const { chartData } = props;
  const data = chartData.chart
    ? chartData.chart.filter(data => data.marketAverage > -1)
    : undefined;
  return (
    <Fragment>
      <div className="container-fluid mb-4">
        <div className="h4">{chartData.companyName}</div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="minute" />
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
              dataKey="marketAverage"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};

export default PreviewChart;
