import React from "react";

const menuToggleButton = (props: any) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default menuToggleButton;
