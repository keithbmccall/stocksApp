import React from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/lib/fa";
//
import classes from "./StockPreviews.module.css";
//
const StockPreviewItem = props => {
  const { data } = props.stock;
  const name = data.companyName.includes("Corporation")
    ? data.companyName.split("Corporation").join("Corp.")
    : data.companyName;
  //
  const downIcon = <FaAngleDoubleDown />;
  const upIcon = <FaAngleDoubleUp />;
  //
  return (
    <div className="container-fluid mb-2">
      <div>
        <span className="h5">{name}</span>
        <small className="ml-3">{data.symbol}</small>
      </div>
      <div>
        <span className={[classes.Small, classes.Open].join(" ")}>
          {data.open}
        </span>
        <span className={classes.Small}>
          {upIcon} {data.high}
        </span>
        <span className={classes.Small}>
          {downIcon} {data.low}
        </span>
      </div>
    </div>
  );
};
export default StockPreviewItem;
