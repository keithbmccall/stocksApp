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

  //deterimines color of arrows  to determine loss or gains

  const status = data.change > 0 ? "green" : data.change < 0 ? "red" : "black";
  const statusIcon =
    data.change > 0 ? (
      <FaAngleDoubleUp />
    ) : data.change < 0 ? (
      <FaAngleDoubleDown />
    ) : null;
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
            <span style={{ color: status }}>{statusIcon}</span>${data.open.toFixed(
              2
            )}
          </span>
          <span className={classes.Small}>High: ${data.high.toFixed(2)}</span>
          <span className={classes.Small}>Low: ${data.low.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
};
export default StockPreviewItem;
