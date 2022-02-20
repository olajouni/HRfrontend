import React, { useState } from "react";
import "./Topbar.css";
import { NotificationsNone, Search } from "@material-ui/icons";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";

export default function Topbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="./images/logo.png" alt="" className="logo" />
        </div>
        <div className="navSearch">
          <input type="text" placeholder="Search here..." />
          <Search />
        </div>

        <div className="topRight">
          <img src="./images/profile.png" alt="" className="topAvatar" />
          <div className="topbarIcons">
            <NotificationsNone />
          </div>
        </div>
        {/* <div className="profileIcon" onClick={handleClick}>
          <AccountCircle />
        </div> */}
      </div>
    </div>
  );
}
