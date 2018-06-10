import {
  QUERY_ALL_SYMBOLS,
  QUERY_STOCKS,
  UPDATE_PREVIEW_CHART,
  QUERY_MARKETS,
  QUERY_ALL_NEWS
} from "./actionTypes";
import previewedStocks from "../../data/stockPreviews";
import apiHelper from "../../api";

export const queryStocks = () => dispatch => {
  Promise.all(previewedStocks.map(apiHelper.queryStock))
    .then(response => {
      Promise.all(
        previewedStocks.map(stock => apiHelper.queryStockInterval(stock))
      )
        .then(res => {
          let responses = response.reduce((acc, cur, i) => {
            cur.data.chart = res[i].data;
            acc.push(cur);
            return acc;
          }, []);
          return dispatch({
            type: QUERY_STOCKS,
            payload: { all: responses, chartData: responses[0] }
          });
        })
        .catch(err =>
          console.log("error in stockActions-querystocks-inner:", err)
        );
    })
    .catch(err =>
      console.log("error in stockActions-querystocks-outter:", err)
    );
};
export const updatePreviewChart = data => dispatch =>
  dispatch({ type: UPDATE_PREVIEW_CHART, payload: { chartData: data } });

export const queryAllSymbols = () => dispatch =>
  apiHelper
    .queryAllSymbols()
    .then(response =>
      dispatch({ type: QUERY_ALL_SYMBOLS, payload: response.data })
    )
    .catch(err => console.log("error in stockActions - queryallsymbols:", err));
export const queryMarkets = () => dispatch =>
  apiHelper
    .queryMarkets()
    .then(response =>
      dispatch({
        type: QUERY_MARKETS,
        payload: response.data
      })
    )
    .catch(err => console.log("error in stockActions - queryMarkets:", err));
export const queryAllNews = stock => dispatch =>
  apiHelper
    .queryStockNews(stock)
    .then(response =>
      dispatch({
        type: QUERY_ALL_NEWS,
        payload: response.data
      })
    )
    .catch(err => console.log("error in stockActions - queryStockNews:", err));
