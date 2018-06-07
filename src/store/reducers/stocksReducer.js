import { QUERY_STOCKS } from "../actions/actionTypes";

const initialState = {
  info: [],
  chartData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUERY_STOCKS:
      return {
        ...state,
        info: action.payload.all,
        chartData: action.payload.chartData.data
      };
    default:
      return state;
  }
};
