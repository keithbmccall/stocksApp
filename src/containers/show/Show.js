import React, { Component } from "react";
import apiHelper from "../../api";
import BigHeading from "../../components/tools/BigHeading";
import ShowChart from "../../components/charts/ShowChart";
import CompanyInfo from "../../components/tools/CompanyInfo";
import NewsFeed from "../../components/tools/NewsFeed";
//
export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      chart: [],
      info: "",
      logo: ""
    };
  }
  clickHandler = e => {
    e.preventDefault();
    console.log(this.state.info.symbol, e.target.dataset.timeframe);
    return e.target.dataset.timeframe === "1d"
      ? this.queryAndUpdateStockInterval(
          this.state.info.symbol,
          e.target.dataset.timeframe
        )
      : this.fetchStockByInterval(
          this.state.info.symbol,
          e.target.dataset.timeframe
        );
  };
  querySetInterval = (symbol, interval) =>
    // called once a minute to update stock in psuedo real time
    setInterval(
      () =>
        apiHelper.queryStockInterval(symbol, interval).then(res =>
          this.setState({
            chart: res.data
          })
        ),
      60000
    );
  queryAndUpdateStockInterval = (symbol, interval) => {
    apiHelper.queryStockInterval(symbol, interval).then(res =>
      this.setState({
        chart: res.data
      })
    );
    this.querySetInterval(symbol, interval);
  };
  fetchStockByInterval = (symbol, interval) => {
    apiHelper.queryStockInterval(symbol, interval).then(res =>
      this.setState({
        chart: res.data
      })
    );
    clearInterval(this.querySetInterval);
  };
  fetchStockShow = symbol => {
    apiHelper.fetchCompanyNews(symbol).then(res =>
      this.setState({
        news: res.data
      })
    );
    apiHelper.fetchCompanyInfo(symbol).then(res =>
      this.setState({
        info: res.data
      })
    );
    apiHelper
      .fetchCompanyLogo(symbol)
      .then(res => this.setState({ logo: res.data.url }));
    this.queryAndUpdateStockInterval(symbol, "1d");
  };
  componentDidMount() {
    this.fetchStockShow(this.props.match.params.symbol);
  }
  render() {
    return (
      <div className="container-fluid mb-5">
        <BigHeading>
          <img
            src={this.state.logo}
            className="company-logo rounded"
            alt={`${this.state.info.companyName} Logo`}
          />
          {this.state.info.companyName}
        </BigHeading>
        <ShowChart
          chartData={this.state.chart}
          clickHandler={this.clickHandler}
        />
        <div className="row">
          <div className="col-md-6">
            <CompanyInfo info={this.state.info} />
          </div>
          <div className="col-sm-6">
            <NewsFeed news={this.state.news} />
          </div>
        </div>
      </div>
    );
  }
}
