import axios from "axios";

const apiHelper = {
  queryStock1Day: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/chart/1d`
    }),
  queryStock: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/quote`
    }),
  queryAllSymbols: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/ref-data/symbols`
    })
};
export default apiHelper;
