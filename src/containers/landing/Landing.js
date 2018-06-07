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
  queryStocks = () => this.props.queryStocks();
  //
  componentDidMount() {
    this.queryStocks();
  }
  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="container-fluid">
          <div className={classes.Header}>US Market</div>
        </div>
        <div className="row">
          <div className="col-md-5">
            {this.props.info.length > 0 && (
              <StockPreviews stockInfo={this.props.info} />
            )}
          </div>
          <div className="col-md-7">
            <PreviewChart />
          </div>
        </div>
      </div>
    );
  }
  s;
}
const mapDispatchToProps = dispatch => {
  return {
    queryStocks: symbol => dispatch(actions.queryStocks(symbol))
  };
};
const mapStateToProps = state => {
  return {
    info: state.stocks.info
  };
};
Landing.propTypes = {
  queryStocks: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
