import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//
import StockPreviews from "../../components/previews/stocks/StockPreviews";
import PreviewChart from "../../components/previews/charts/PreviewChart";
//
class Landing extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5">
            <StockPreviews />
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
const mapStateToProps = state => {
  return {
    isSmallScreen: state.window.windowWidth < 700
  };
};
Landing.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired
};
export default connect(mapStateToProps)(Landing);
