import React, { useState } from "react";

import { addEvent } from "../action/eventAction.js";
import { connect } from "react-redux";

import { v4 } from "uuid";

function AddEvents({ addEvent }) {
  //console.log(props);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    const events = {
      id: v4(),
      name,
      detail,
      time,
      venue,
    };

    addEvent(events);

    setName(" ");
    setDetail(" ");
    setTime(" ");
    setVenue(" ");
  };
  return (
    <div className="card m-5 h6">
      <div
        className="card-header h5"
        style={{ backgroundColor: "#66fcf1", color: "#000000" }}
      >
        {" "}
        Add Events
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-grop">
            <label>Event Name</label>
            <input
              type="text"
              className="form-control mb-3"
              name="Name"
              placeholder="Enter Event Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Event Detail</label>
            <textarea
              className="form-control mb-3"
              name="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows="3"
            ></textarea>
            <label>Timing</label>
            <input
              type="text"
              className="form-control mb-3"
              name="text"
              placeholder="Dd - mm - yyyy"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <label>Venue</label>
            <input
              type="text"
              className="form-control mb-3"
              name="venue"
              placeholder="Enter venue ..."
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
          <input
            style={{ backgroundColor: "#c5c6c7" }}
            type="submit"
            value="Add Event"
            className="btn btn-block h5"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addEvent: (events) => {
    console.log(events);
    dispatch(addEvent(events));
  },
});

export default connect(null, mapDispatchToProps)(AddEvents);
