import React from "react";
import Link from "next/link";

const sideDrawer = (props: any) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <Link href="/">Product</Link>
        </li>
        <li>
          <Link href="/">User</Link>
        </li>
        <li>
          <Link href="/">Music</Link>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
