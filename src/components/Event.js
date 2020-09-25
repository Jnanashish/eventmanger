import React from "react";
import { connect } from "react-redux";
import { deleteEvent } from "../action/eventAction";

function Event(props) {
  return (
    <div className="card" style={{}}>
      <h2 className="m-3">Today's Event</h2>
      {props.events.map((event) => (
        <div className="list-group-item">
          <div className="card-body m-1">
            <h5 className="card-title card-header mb-1">
              {event.name}
              <span onClick={() => props.deleteEvent(event.id)}>
                <p
                  className="h6 mt-1"
                  style={{ float: "right", cursor: "pointer" }}
                >
                  DELETE
                </p>
              </span>
            </h5>
            <p className="card-text ml-4">{event.detail}</p>
            <h6 className="card-text ml-4">Timing: {event.time}</h6>
            <h6 className="card-text ml-4">Venue: {event.venue}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({ events: state.eventReducer });
const mapDispatchToProps = (dispatch) => ({
  deleteEvent: (id) => dispatch(deleteEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
