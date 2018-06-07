import axios from "axios";
import { QUERY_STOCKS } from "./actionTypes";
import previewedStocks from "../../data/stockPreviews";

export const queryStocks = () => dispatch => {
  Promise.all(
    previewedStocks.map(stock =>
      axios({
        method: "get",
        url: `https://api.iextrading.com/1.0/stock/${stock}/quote`
      })
    )
  ).then(response => dispatch({ type: QUERY_STOCKS, payload: response }));
};
