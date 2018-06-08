import {
  QUERY_ALL_SYMBOLS,
  QUERY_STOCKS,
  UPDATE_PREVIEW_CHART
} from "./actionTypes";
import previewedStocks from "../../data/stockPreviews";
import apiHelper from "../../api";

export const queryStocks = () => dispatch => {
  Promise.all(previewedStocks.map(apiHelper.queryStock)).then(response => {
    Promise.all(previewedStocks.map(apiHelper.queryStock1Day)).then(res => {
      let responses = response.reduce((acc, cur, i) => {
        cur.data.chart = res[i].data;
        acc.push(cur);
        return acc;
      }, []);
      return dispatch({
        type: QUERY_STOCKS,
        payload: { all: responses, chartData: responses[0] }
      });
    });
  });
};
export const updatePreviewChart = data => dispatch =>
  dispatch({ type: UPDATE_PREVIEW_CHART, payload: { chartData: data } });

export const queryAllSymbols = () => dispatch =>
  apiHelper
    .queryAllSymbols()
    .then(response =>
      dispatch({ type: QUERY_ALL_SYMBOLS, payload: response.data })
    );
