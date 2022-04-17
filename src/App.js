import "./App.css";
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import { Candidate } from "./Pages/Candidate/Candidate";
import { Route, Routes } from "react-router-dom";
import Vacancies from "./Pages/Vacancies/Vacancies";
import Starred from "./Pages/Starred/Starred";
import SignUp from "./Components/SignUp/SignUp";
import Form from "./Components/SignUp/Form";
import PCal from "./Pages/PCal/PCal";
import User from "./Pages/User/User";

function App() {
  return (
    <div className="h">
      {/* <Topbar /> */}

      <div className="container">
        {/* <Sidebar /> */}
        <div className="other">
          <Routes>
            {/* <Route exact path="/" element={<Form />}></Route> */}
            {/* {<Route exact path="/" element={<Home />}></Route>} */}
            <Route exact path="/applicants" element={<Candidate />}></Route>
            <Route exact path="/" element={<Vacancies />}></Route>

            <Route
              exact
              path="/starred-applications"
              element={<Starred />}
            ></Route>

            <Route exact path="/calendar" element={<PCal />}></Route>
            <Route exact path="/user/:userId" element={<User />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
