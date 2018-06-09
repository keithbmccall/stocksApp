import React from "react";
import { Link } from "react-router-dom";
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
    <Link to={`/stocks/${data.symbol}`}>
      <div
        className={[
          `container-fluid mb-2 border-bottom ${props.index === 0 &&
            "border-top"}`,
          classes.Click
        ].join(" ")}
        onMouseOver={() => props.updatePreviewChart(data)}
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
    </Link>
  );
};
export default StockPreviewItem;
