import axios from "axios";

const apiHelper = {
  queryStockInterval: (stock, interval) => {
    const time = interval ? interval : "1d";
    return axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/chart/${time}`
    });
  },
  queryStock: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/quote`
    }),
  queryAllSymbols: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/ref-data/symbols`
    }),
  queryStockNews: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/news/last/8`
    })
};
export default apiHelper;
