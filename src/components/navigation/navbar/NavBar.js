import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
//
import NavItems from "./navitems/NavItems";
import SearchBar from "./search/SearchBar";

const NavBar = props => {
  const navBar = !props.isSmallScreen ? (
    <Fragment>
      <div className="d-flex align-items-center cursor nav-link  ">
        <Link to="/" className="text-dark">
          LOGO
        </Link>
      </div>
      <SearchBar />
      <nav className="nav col-sm align-items-center justify-content-end">
        <NavItems />
      </nav>
    </Fragment>
  ) : (
    <Fragment>
      <div className="dropdown d-flex align-items-center cursor min-width-80">
        <div
          className="dropdown-toggle nav-link"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          LOGO
        </div>
        <div
          className="dropdown-menu border-0"
          aria-labelledby="dropdownMenuButton"
        >
          <NavItems isSmallScreen={props.isSmallScreen} />
        </div>
      </div>
      <SearchBar />
    </Fragment>
  );

  return (
    <div
      className={[classes.Container, "d-flex border-bottom w-100 pl-2 fixed-top"].join(
        " "
      )}
    >
      {navBar}
    </div>
  );
};

export default NavBar;
