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
      <div className="toolbar_logo">
        <span>
          Wahyu <span className="text-lg text-primary">Setiawan</span>
        </span>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link href="/">About Me</Link>
          </li>
          <li>
            <Link href="/">Project</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
