import React, { Fragment } from "react";
import StockPreviewItem from "./StockPreviewItem";
//
const StockPreviews = props => {
  
  const renderStockPreviews = (stock, key) => (
    <StockPreviewItem
      stock={stock}
      key={key}
      index={key}
      updatePreviewChart={props.updatePreviewChart}
    />
  );
  const { isSmall, stockInfo } = props;
  const stockPreviews = stockInfo.map(renderStockPreviews);
  return (
    <div className={`flex-column ${isSmall ? "text-left" : "row text-right"}`}>
      <div>{stockPreviews}</div>
    </div>
  );
};

export default StockPreviews;
