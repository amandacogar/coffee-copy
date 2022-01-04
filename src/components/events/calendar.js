import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

function Cal() {
  const API_key = "AIzaSyCXhx3df71RK2ihJEnGiHYcOwNAXvzK8V4";
  const calendars = { calendarID: "msamandacogar@gmail.com" };
  return (
    <Calendar apiKey={API_key} calendars={calendars} id="google-calendar" />
  );
}

export default Cal;
