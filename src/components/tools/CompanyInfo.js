import React from "react";
import SmallHeading from "./SmallHeading";
import classes from "./Tools.module.css";
import methods from "../../methods";

const CompanyInfo = props => {
  const { info } = props;
  return (
    <div className="container-fluid">
      <SmallHeading>Profile</SmallHeading>
      <div className={[classes.InfoSections, "border-bottom"].join(" ")}>
        {info.exchange} | {info.symbol} |{" "}
        <a href={info.website}>{info.website}</a>
      </div>
      <div className={[classes.InfoSections, "border-bottom"].join(" ")}>
        CEO: {info.CEO} | Sector: {info.sector} | Industry: {info.industry}
      </div>
      <h6 className={classes.InfoHeading}>Company Description</h6>
      <div className={[classes.InfoSections, "border-bottom"].join(" ")}>
        {info.description && methods.textUnEncoder(info.description)}
      </div>
    </div>
  );
};
export default CompanyInfo;
