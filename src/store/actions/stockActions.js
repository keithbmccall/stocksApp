import axios from "axios";
import { QUERY_STOCKS, UPDATE_PREVIEW_CHART } from "./actionTypes";
import previewedStocks from "../../data/stockPreviews";

export const queryStocks = () => dispatch => {
  Promise.all(
    previewedStocks.map(stock =>
      axios({
        method: "get",
        url: `https://api.iextrading.com/1.0/stock/${stock}/quote`
      })
    )
  ).then(response =>
    dispatch({
      type: QUERY_STOCKS,
      payload: { all: response, chartData: response[0] }
    })
  );
};
export const updatePreviewChart = data => dispatch =>
  dispatch({ type: UPDATE_PREVIEW_CHART, payload: { chartData: data } });
