import React, { Fragment } from "react";
import StockPreviewItem from "./StockPreviewItem";
//
const StockPreviews = props => {
  const renderStockPreviews = (stock, key) => (
    <StockPreviewItem stock={stock} key={key} />
  );
  const stockPreviews = props.stockInfo.map(renderStockPreviews);
  return <Fragment>{stockPreviews}</Fragment>;
};

export default StockPreviews;
