import React, { useMemo } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import "./Vacancies.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { vacancyColumns, vacancyRows } from "../../vacanciesdata";
import { Button } from "@material-ui/core";
import axios from "axios";

export default function Vacancies() {
  const applicantColumn = [
    {
      field: "applicants",
      headerName: "Applicants",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/applicants"}>
              <button className="userListView">View</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="vacancyContainer">
          <Link to="/calendar">
            <Button
              variant="contained"
              color="primary"
              className="userSchedule"
            >
              Add Vacancy
            </Button>
          </Link>
        </div>
        <div className="datatable">
          <DataGrid
            rows={vacancyRows}
            disableSelectionOnClick
            columns={vacancyColumns.concat(applicantColumn)}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
