import {
  QUERY_STOCKS,
  UPDATE_PREVIEW_CHART,
  QUERY_ALL_SYMBOLS,
  QUERY_ALL_NEWS,
  QUERY_MARKETS
} from "../actions/actionTypes";

const initialState = {
  info: [],
  chartData: {},
  allSymbols: [],
  allNews: [],
  allMarkets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUERY_STOCKS:
      if (state.chartData.chart) {
        return {
          ...state,
          info: action.payload.all
        };
      } else {
        return {
          ...state,
          info: action.payload.all,
          chartData: action.payload.chartData.data
        };
      }
    case UPDATE_PREVIEW_CHART:
      return {
        ...state,
        chartData: action.payload.chartData
      };
    case QUERY_ALL_SYMBOLS:
      return {
        ...state,
        allSymbols: action.payload
      };
    case QUERY_ALL_NEWS:
      return {
        ...state,
        allNews: action.payload
      };
    case QUERY_MARKETS:
      return {
        ...state,
        allMarkets: action.payload
      };
    default:
      return state;
  }
};
