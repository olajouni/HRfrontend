import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  LineStyle,
  WorkOutline,
  PeopleOutline,
  StarOutline,
  // CheckCircleOutline,
  CalendarToday,
  Menu,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebarUpper">
        <div className="toggle-menu-btn">
          <Menu />
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              <Link className="link" to="/">
                Home
              </Link>
            </li>

            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <Link className="link" to="/vacancies">
                Vacancies
              </Link>
            </li>

            <li className="sidebarListItem">
              <PeopleOutline className="sidebarIcon" />
              <Link className="link" to="/applicants">
                Applicants
              </Link>
            </li>

            <li className="sidebarListItem">
              <StarOutline className="sidebarIcon" />
              <Link className="link" to="/starred-applications">
                Starred Applicants
              </Link>
            </li>

            {/* <li className="sidebarListItem">
              <CheckCircleOutline className="sidebarIcon" />
              <Link className="link" to="/interview">
                Interview Status
              </Link>
            </li> */}

            <li className="sidebarListItem">
              <CalendarToday className="sidebarIcon" />
              <Link className="link" to="/calendar">
                Calendar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
