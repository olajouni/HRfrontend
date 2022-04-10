import React, { useMemo } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useTable } from "react-table";
import { userColumns, userRows } from "../../dataapplicants";
import "./Candidate.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

export const Candidate = () => {
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
