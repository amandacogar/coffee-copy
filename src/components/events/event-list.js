import React from "react";

function EventList({ data }) {
  return (
    <>
      <div className="event">
        <a href={data.link} className="event-link">
          <h3 className="event-title">
            {data.title}
            <i class="fas fa-arrow-right"></i>
          </h3>
          <p className="event-description">{data.description}</p>
        </a>
      </div>
    </>
  );
}

export default EventList;
