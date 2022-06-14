import React from "react";

const backdrop = (props: any) => (
  <div
    className="fixed top-0 right-0 w-full h-full bg-primary z-10"
    onClick={props.click}
  />
);

export default backdrop;
