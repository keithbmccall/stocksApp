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
      dayChart: [],
      info: "",
      logo: "",
      logoError: "",
      chartViewIsDay: true
    };
  }
  clickHandler = e => {
    e.preventDefault();
    console.log(this.state.info.symbol, e.target.dataset.timeframe);
    return e.target.dataset.timeframe === "1d"
      ? this.setState({
          chartViewIsDay: true
        })
      : this.setState(
          {
            chartViewIsDay: false
          },
          this.fetchStockByInterval(
            this.state.info.symbol,
            e.target.dataset.timeframe
          )
        );
  };

  queryAndUpdateStockInterval = (symbol, interval) => {
    apiHelper.queryStockInterval(symbol, interval).then(res =>
      this.setState({
        dayChart: res.data
      })
    );
    // called once a minute to update stock in psuedo real time
    setInterval(
      () =>
        apiHelper.queryStockInterval(symbol, interval).then(res =>
          this.setState({
            dayChart: res.data
          })
        ),
      60000
    );
  };
  fetchStockByInterval = (symbol, interval) => {
    apiHelper.queryStockInterval(symbol, interval).then(res =>
      this.setState({
        chart: res.data
      })
    );
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
  //
  render() {
    return (
      <div className="container-fluid mb-5">
        <BigHeading>
          <img
            src={this.state.logo}
            className={`company-logo rounded ${this.state.logoError}`}
            alt={`${this.state.info.companyName} Logo`}
            onError={() =>
              //error handler for broken image
              this.setState({
                logoError: "display-none"
              })
            }
          />
          {this.state.info.companyName}
        </BigHeading>
        <ShowChart
          chartData={
            this.state.chartViewIsDay ? this.state.dayChart : this.state.chart
          }
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
