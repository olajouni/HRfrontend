import React, { useMemo, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useTable } from "react-table";
import { userColumns, userRows } from "../../dataapplicants";
import "./Candidate.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { StarBorder, Star } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export const Candidate = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const actionColumn = [
    {
      field: "status",
      headerName: "Applicant status",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListView">View</button>
            </Link>
          </>
        );
      },
    },
    {
      field: "star",
      headerName: "Star Applicant",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Button></Button>
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
        <div className="datatable">
          <DataGrid
            rows={userRows}
            disableSelectionOnClick
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
