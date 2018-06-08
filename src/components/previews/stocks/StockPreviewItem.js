import React from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/lib/fa";
//
import classes from "./StockPreviews.module.css";
//
const StockPreviewItem = props => {
  const { data } = props.stock;
  data.modifiedCompanyName = data.companyName.includes("Corporation")
    ? data.companyName.split("Corporation").join("Corp.")
    : data.companyName;
  //
  const downIcon = <FaAngleDoubleDown />;
  const upIcon = <FaAngleDoubleUp />;
  //
  return (
    <div
      className={["container-fluid mb-2", classes.Click].join(" ")}
      onMouseOver={() => props.updatePreviewChart(data)}
      onClick={() => console.log("oh yeh")}
    >
      <div>
        <span className={["h5", classes.CompanyName].join(" ")}>
          {data.modifiedCompanyName}
        </span>
        <small className="ml-3">{data.symbol}</small>
      </div>
      <div>
        <span className={[classes.Small, classes.Open].join(" ")}>
          {data.open.toFixed(2)}
        </span>
        <span className={classes.Small}>
          {upIcon}
          {data.high.toFixed(2)}
        </span>
        <span className={classes.Small}>
          {downIcon}
          {data.low.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default StockPreviewItem;
