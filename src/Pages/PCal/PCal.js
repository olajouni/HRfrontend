import React from "react";
// import Calendar from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class PCal extends React.Component {
  render() {
    return (
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    );
  }
}
