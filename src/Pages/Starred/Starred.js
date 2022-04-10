import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Starred.css";

export default function Starred() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        Starred
      </div>
    </div>
  );
}
