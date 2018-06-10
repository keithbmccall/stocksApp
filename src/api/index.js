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
  queryAllSymbols: () =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/ref-data/symbols`
    }),
  queryStockNews: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/news/last/15`
    }),
  queryMarkets: () =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/market`
    }),
  fetchCompanyNews: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/news/last/10`
    }),
  fetchCompanyInfo: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/company`
    }),
  fetchCompanyLogo: stock =>
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${stock}/logo`
    })
};
export default apiHelper;
