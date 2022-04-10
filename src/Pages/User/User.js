import React from "react";
import "./User.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { userColumns, userRows } from "../../dataapplicants";

const User = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="user">
          <div className="userTitleContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
