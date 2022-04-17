import React, { useState, useEffect } from "react";
import "./User.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

import Status from "../../Components/Status";
import { userColumns, userRows } from "../../dataapplicants";
import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Autocomplete, { createFilterOptions } from "@material-ui/core";

import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    vacancy: "",
    email: "",
    phone: "",
    location: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(res.data);
  };
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
                Schedule Interview
              </Button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userDisplay">
              <div className="userShowTop">
                <span className="userShowUserName">name: {user.name}</span>
                <span className="userShowUserTitle">
                  position: {user.vacancy}
                </span>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">phone: {user.phone}</span>
                  <span className="userShowInfoTitle">email: {user.email}</span>
                  <span className="userShowInfoTitle">
                    location: {user.location}
                  </span>
                </div>
                <div className="pdfContainer">
                  <span className="showPdf"></span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              {/* <div className="userEdit">
                <div className="userUpdateTitle">Comments</div>
                <TextField fullWidth multiline rows={3} id="fullWidth" />

                <div className="trial">
                  <Status />
                </div> */}
              {/* </div> */}
            </div>
          </div>
          <hr />
          <h1>HR Manager section</h1>
        </div>
        <div className="hrSection">
          <div className="container">
            <div className="interview1">
              <div className="interview2">
                <div className="interview3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
