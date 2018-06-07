import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import classes from "./SearchBar.module.css";

export default class SearchBarTypeAhead extends Component {
  render() {
    const options = ["john", "bill", "dallas"];
    return (
      <Typeahead
        labelKey="name"
        options={options}
        placeholder="Where are we going?"
        inputProps={{ className: ["border-0 ", classes.Input].join(" ") }}
      />
    );
  }
}
