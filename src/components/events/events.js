import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";
import eventImg from "./event-menu.avif";
import events from "./events.json";
import EventList from "./event-list.js";

function Events() {
  const [data, setData] = useState(events.events);
  return (
    <>
      <section className="section" id="events">
        <div className="page-header">
          <h2 className="heading" id="events-heading">
            Events
          </h2>
        </div>
        <div id="event-body">
          <Image
            src={eventImg}
            alt="wine glasses clinking their glass in a toast at the local wine bar"
            fluid
            id="event-menu-img"
          />
          <Container fluid id="event-menu">
            <h3 className="heading" id="event-menu-heading">
              Coming Up
            </h3>
            <div id="event-menu-body">
              {data.map((event, i) => (
                <EventList data={event} key={i} />
              ))}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Events;
