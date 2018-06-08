import { QUERY_STOCKS, UPDATE_PREVIEW_CHART } from "../actions/actionTypes";

const initialState = {
  info: [],
  chartData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUERY_STOCKS:
      return state.chartData.chart
        ? { ...state, info: action.payload.all }
        : {
            ...state,
            info: action.payload.all,
            chartData: action.payload.chartData.data
          };
    // if (state.chartData.chart) {
    //   return {
    //     ...state,
    //     info: action.payload.all
    //   };
    // } else {
    //   return {
    //     ...state,
    //     info: action.payload.all,
    //     chartData: action.payload.chartData.data
    //   };
    // }
    case UPDATE_PREVIEW_CHART:
      return {
        ...state,
        chartData: action.payload.chartData
      };
    default:
      return state;
  }
};
