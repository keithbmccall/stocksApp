import React from "react";
import classes from "./Tools.module.css";
//

const BigHeading = props => (
  <div className={[classes.BigHeading, "text-center"].join(" ")}>
    {props.children}
  </div>
);

export default BigHeading;
