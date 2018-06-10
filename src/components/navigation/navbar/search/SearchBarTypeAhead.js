import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import classes from "./SearchBar.module.css";

class SearchBarTypeAhead extends Component {
  constructor() {
    super();
    this.state = {
      entry: ""
    };
  }
  submitHandler = e => {
    e.preventDefault;
    //pushes router to page based on searchbar input
  
    this.props.history.push(`/stocks/${this.state.entry}`);
  };
  changeHandler = e => {
    this.setState({
      entry: e[0]
    });
  };
  render() {
    const options =
      this.props.allSymbols.length > 0
        ? this.props.allSymbols.map(stock => stock.symbol)
        : [];
    //having 8000+ items really affects performance but I had trouble finding an autocomplete API for stock symbols :/
    return (
      <form className={classes.Flex1} onSubmit={this.submitHandler}>
        <Typeahead
          delay={1000}
          labelKey="name"
          options={options}
          placeholder="Search by stock symbol"
          inputProps={{ className: ["border-0 ", classes.Input].join(" ") }}
          maxResults={4}
          ignoreDiacritics={false}
          selectHintOnEnter={true}
          onChange={this.changeHandler}
        />
        <button type="submit" className={classes.Button} />
      </form>
    );
  }
}
export default withRouter(SearchBarTypeAhead);
