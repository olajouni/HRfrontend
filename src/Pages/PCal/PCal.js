import React from "react";
import "./PCal.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";

// export default class PCal extends React.Component {
//   render() {
//     return (
//       <div className="list">
//         <Sidebar />
//         <div className="listContainer">
//           <Topbar />
//           <FullCalendar plugins={[dayGridPlugin]} />
//         </div>
//       </div>
//     );
//   }
// }

const PCal = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
      </div>
    </div>
  );
};

export default PCal;
