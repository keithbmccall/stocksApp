import { QUERY_STOCKS } from "../actions/actionTypes";

const initialState = {
  info: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUERY_STOCKS:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};
