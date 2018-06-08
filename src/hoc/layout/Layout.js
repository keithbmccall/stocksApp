import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../store/actions/index";
import classes from "./Layout.module.css";
//
import NavBar from "../../components/navigation/navbar/NavBar";
//

class Layout extends Component {
  componentDidMount() {
    this.props.windowResize();
    window.addEventListener("resize", this.props.windowResize);
    this.props.queryAllSymbols();
  }
  render() {
    return (
      <Fragment>
        <NavBar
          isSmallScreen={this.props.isSmallScreen}
          allSymbols={this.props.allSymbols}
        />
        <div className={classes.Container}>{this.props.children}</div>
      </Fragment>
    );
  }
}
Layout.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  return {
    isSmallScreen: state.window.windowWidth < 700,
    allSymbols: state.stocks.allSymbols
  };
};
const mapDispatchToProps = dispatch => {
  return {
    queryAllSymbols: () => dispatch(actions.queryAllSymbols()),
    windowResize: () => dispatch(actions.windowResize())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
