import React, { useState, useEffect } from "react";
import "./User.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

import Status from "../../Components/Status";
import { userColumns, userRows } from "../../dataapplicants";
import { Link, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import Autocomplete, { createFilterOptions } from "@material-ui/core";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    vacancy: "",
    email: "",
    phone: "",
    location: "",
  });

  const [applicantStatus, setApplicantStatus] = React.useState("");

  const handleChange = (event) => {
    setApplicantStatus(event.target.value);
  };

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
          <div className="hrSection">
            <div className="interview1">
              <span className="userShowInterviewTitle">Interview 1</span>
              <div className="field">
                <TextField
                  id="datetime-local"
                  label="Interview Date and Time"
                  type="datetime-local"
                  defaultValue=""
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Interviewer"
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  variant="standard"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantStatus}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem>Pass to phase 2</MenuItem>
                    <MenuItem>Rejected</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="interview2">
              <span className="userShowInterviewTitle">Interview 2</span>
              <div className="field">
                <TextField
                  id="datetime-local"
                  label="Interview Date and Time"
                  type="datetime-local"
                  defaultValue=""
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Interviewer"
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  variant="standard"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantStatus}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Pass to phase 3</MenuItem>
                    <MenuItem value={20} color="black">
                      Rejected
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="interview3">
              <span className="userShowInterviewTitle">Interview 3</span>
              <div className="field">
                <TextField
                  id="datetime-local"
                  label="Interview Date and Time"
                  type="datetime-local"
                  defaultValue=""
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Interviewer"
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  variant="standard"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantStatus}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Accepted</MenuItem>
                    <MenuItem value={2} color="black">
                      Rejected
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
