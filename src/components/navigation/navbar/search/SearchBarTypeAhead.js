import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import classes from "./SearchBar.module.css";

export default class SearchBarTypeAhead extends Component {
  render() {
    const options =
      this.props.allSymbols.length > 0
        ? this.props.allSymbols.map(stock => stock.symbol)
        : [];

    return (
      <Typeahead
      delay={1000}
        labelKey="name"
        options={options}
        placeholder="Search by stock symbol"
        inputProps={{ className: ["border-0 ", classes.Input].join(" ") }}
        maxResults={4}
        ignoreDiacritics={false}
        selectHintOnEnter={true}
      />
    );
  }
}
