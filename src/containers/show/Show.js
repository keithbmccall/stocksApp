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
      info: ""
    };
  }
  fetchStockShow = symbol => {
    apiHelper.fetchCompanyNews(symbol).then(res =>
      this.setState({
        news: res.data
      })
    );
    apiHelper.queryStockInterval(symbol).then(res =>
      this.setState({
        chart: res.data
      })
    );
    apiHelper.queryStock(symbol).then(res =>
      this.setState({
        info: res.data
      })
    );
  };
  UNSAFE_componentWillMount() {
    //props.match.params.sybmol
    this.fetchStockShow(this.props.match.params.symbol);
  }
  render() {
    return (
      <div className="container-fluid">
        <BigHeading text={this.state.info.companyName} />
        <ShowChart chartData={this.state.chart} />
        <div className="row">
          <div className="col-sm-6">
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
