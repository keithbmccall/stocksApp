import React from "react";
import { Link } from "react-router-dom";

const NavItem = props => {
  return (
    <Link
      className={`nav-link text-dark ${props.isSmallScreen && "border-bottom"}`}
      to={props.item.link}
    >
      {props.item.title}
    </Link>
  );
};

export default NavItem;
