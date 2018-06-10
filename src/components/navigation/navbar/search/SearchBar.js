import React from "react";
import FaSearch from "react-icons/lib/fa/search";
//
import SearchBarTypeAhead from "./SearchBarTypeAhead";
//
const SearchBar = props => {
  const searchIcon = <FaSearch />;
  return (
    <div className="col-sm d-flex align-items-center">
      <div className="input-group border h-50 rounded">
        <div className="input-group-prepend">
          <span
            className="input-group-text bg-white border-0"
            id="basic-addon1"
          >
            {searchIcon}
          </span>
        </div>

        <SearchBarTypeAhead allSymbols={props.allSymbols} />
      </div>
    </div>
  );
};

export default SearchBar;
