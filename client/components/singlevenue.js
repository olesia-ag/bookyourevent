import React from "react";
import { checkDate } from "../store/calendar";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getVenue } from "../store/venue";

const SingleVenue = props => {



  const renderDates = dates => {
    if (!dates) {
      return;
    } else {
      //make this a link to each specific event
      return dates.sort().map((date, index) => <td key={index}>{date}</td>);
    }
  };


  return (
    <div>
      <div className="venues-row">
        <div className="venues-cell">{props.name}</div>
        <div className="venues-cell">{props.maxcapacity}</div>
       <div className="venues-cell"> &nbsp; {renderDates(props.venueBookedDates)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state in venue", state);
  return {
    // currentMonth: state.calendar.currentMonth,
    // selectedDate: state.calendar.selectedDate,
    // isAvailable: state.calendar.isAvailable,
    // checkedDate: state.calendar.checkedDate,
    venueName: state.venue.venue.name,
    venueId: state.venue.venue.id,
    venueMaxCapacity: state.venue.venue.maxcapacity,
    venueBookedDates: state.venue.venue.booked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVenue: venueId => dispatch(getVenue(venueId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleVenue)
);
