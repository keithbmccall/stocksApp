import React, { Fragment,Component } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
//
import NavItems from "../../components/navigation/navbar/navitems/NavItems";
import SearchBar from "../../components/navigation/navbar/search/SearchBar";
import BigHeading from "../../components/tools/BigHeading";

export default class NavBar extends Component {
  render() {
    const navBar = !this.props.isSmallScreen ? (
      <Fragment>
        <div className="d-flex align-items-center cursor nav-link  ">
          <Link to="/" className="text-light">
            <BigHeading>
              <span className="logo">STARCKS</span>
            </BigHeading>
          </Link>
        </div>
        <SearchBar allSymbols={this.props.allSymbols} />
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
            <BigHeading>
              <span className="logo">STARCKS</span>
            </BigHeading>
          </div>
          <div
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuButton"
          >
            <NavItems isSmallScreen={this.props.isSmallScreen} />
          </div>
        </div>
        <SearchBar allSymbols={this.props.allSymbols} />
      </Fragment>
    );

    return (
      <div
        className={[
          classes.Container,
          "d-flex border-bottom w-100 pl-2 fixed-top shadow "
        ].join(" ")}
      >
        {navBar}
      </div>
    );
  }
}
