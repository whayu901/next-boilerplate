import React from "react";
import Link from "next/link";

import SideMenu from "./sideBarMenu";
// import "./navbar.css";

const toolbar = (props: any) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo"></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
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
      </div>
    </nav>
  </header>
);

export default toolbar;
