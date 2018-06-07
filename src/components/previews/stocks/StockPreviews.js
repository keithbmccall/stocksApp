import React, { Fragment } from "react";
import StockPreviewItem from "./StockPreviewItem";
//
const StockPreviews = props => {
  const renderStockPreviews = (stock, key) => (
    <StockPreviewItem stock={stock} key={key} />
  );
  const { isSmall, stockInfo } = props;
  const stockPreviews = stockInfo.map(renderStockPreviews);
  const textAlign = isSmall ? "text-left" : "row text-right";
  return (
    <div
      className={["align-items-center flex-column", textAlign].join(" ")}
    >
      <div>{stockPreviews}</div>
    </div>
  );
};

export default StockPreviews;
