import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import { Candidate } from "./Pages/Candidate/Candidate";
import { Route, Routes } from "react-router-dom";
import Vacancies from "./Pages/Vacancies/Vacancies";
import Starred from "./Pages/Starred/Starred";
import Interview from "./Pages/Interview/Interview";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />

        <div className="other">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/applicants" element={<Candidate />}></Route>
            <Route path="/vacancies" element={<Vacancies />}></Route>
            <Route
              exact
              path="/starred-applications"
              element={<Starred />}
            ></Route>
            <Route exact path="/interviews" element={<Interview />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
