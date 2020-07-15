import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import Navbar from "../ui/Navbar";

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Birth Day",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
  },
];

const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAncestor="start"
        endAncestor="end"
      />
    </div>
  );
};

export default CalendarScreen;
