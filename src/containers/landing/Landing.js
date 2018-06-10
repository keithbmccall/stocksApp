import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//
import StockPreviews from "../../components/previews/stocks/StockPreviews";
import PreviewChart from "../../components/previews/charts/PreviewChart";
import BigHeading from "../../components/tools/BigHeading";
//
import * as actions from "../../store/actions/index";
//
class Landing extends Component {
  //methdos
  queryLandingPage = () => {
    this.props.queryStocks();
    setInterval(() => this.props.queryStocks(), 60000);
  };
  //
  updateChart = data => {};
  componentDidMount() {
    this.queryLandingPage();
  }
  render() {
    return (
      <div className="container-fluid mt-4 mb-5">
        <div className="container-fluid">
          <BigHeading>Top Quotes</BigHeading>
        </div>
        <div className="row">
          <div className="col-md-4 mt-3">
            <StockPreviews
              stockInfo={this.props.info}
              isSmall={this.props.isSmall}
              updatePreviewChart={this.props.updatePreviewChart}
            />
          </div>
          <div className="col-md-8 mt-3">
            <PreviewChart chartData={this.props.chartData} />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    queryStocks: () => dispatch(actions.queryStocks()),
    updatePreviewChart: data => dispatch(actions.updatePreviewChart(data)),
    queryAllNews: market => dispatch(actions.queryAllNews(market)),
    queryMarkets: () => dispatch(actions.queryMarkets())
  };
};
const mapStateToProps = state => {
  console.log("ss", state.stocks);
  return {
    info: state.stocks.info,
    chartData: state.stocks.chartData,
    isSmall: state.window.windowWidth < 768,
    allNews: state.stocks.allNews,
    allMarkets: state.stocks.allMarkets
  };
};
Landing.propTypes = {
  queryStocks: PropTypes.func.isRequired,
  info: PropTypes.array.isRequired,
  chartData: PropTypes.object.isRequired,
  isSmall: PropTypes.bool.isRequired,
  queryMarkets: PropTypes.func.isRequired,
  queryAllNews: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
