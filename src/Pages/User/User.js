import React from "react";
import "./User.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

import Status from "../../Components/Status";
import { userColumns, userRows } from "../../dataapplicants";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Autocomplete, { createFilterOptions } from "@material-ui/core";

const User = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="user">
          <div className="userTitleContainer">
            <Link to="/calendar">
              <Button
                variant="contained"
                color="primary"
                className="userSchedule"
              >
                Scedule Meeting
              </Button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userDisplay">
              <div className="userShowTop">
                <span className="userShowUserName">John Smith</span>
                <span className="userShowUserTitle">Business Analyst</span>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">johnsmith</span>
                  <span className="userShowInfoTitle">+961 03333333</span>
                  <span className="userShowInfoTitle">john99@gmail.com</span>
                  <span className="userShowInfoTitle">Lebanon Beirut</span>
                </div>
                <div className="pdfContainer">
                  <span className="showPdf"></span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <div className="userEdit">
                <div className="userUpdateTitle">Comments</div>
                <TextField fullWidth multiline rows={3} id="fullWidth" />

                <div className="trial">
                  <Status />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
