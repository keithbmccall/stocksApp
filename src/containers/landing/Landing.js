import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//
import StockPreviews from "../../components/previews/stocks/StockPreviews";
import PreviewChart from "../../components/previews/charts/PreviewChart";
//
import classes from "./Landing.module.css";
//
import * as actions from "../../store/actions/index";
//
class Landing extends Component {
  //methdos
  queryStocks = () => {
    this.props.queryStocks();
    setInterval(() => this.props.queryStocks(), 60000);
  };
  //
  updateChart = data => {};
  componentDidMount() {
    this.queryStocks();
  }
  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="container-fluid">
          <div className={[classes.Header, "text-center"].join(" ")}>
            US Market
          </div>
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
    queryStocks: symbol => dispatch(actions.queryStocks(symbol)),
    updatePreviewChart: data => dispatch(actions.updatePreviewChart(data))
  };
};
const mapStateToProps = state => {
  return {
    info: state.stocks.info,
    chartData: state.stocks.chartData,
    isSmall: state.window.windowWidth < 768
  };
};
Landing.propTypes = {
  queryStocks: PropTypes.func.isRequired,
  info: PropTypes.array.isRequired,
  chartData: PropTypes.object.isRequired,
  isSmall: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
