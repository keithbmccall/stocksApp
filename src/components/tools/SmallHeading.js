import React from "react";
//

const SmallHeading = props => (
  <h4 className={["ml-4", props.className].join(" ")} style={props.style}>
  {props.children}</h4>
);

export default SmallHeading;
