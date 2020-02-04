import React from "react";
import { checkDate } from "../store/calendar";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getVenue } from "../store/venue";

const SingleRequest = props => {


  return (
    <div>
      <div className="venues-row">

        <div className="venues-cell">{props.date.slice(0, 10)}</div>
        <div className="venues-cell">{props.lastName}</div>
        <div className="venues-cell">{props.firstName}</div>
        <div className="venues-cell">{props.email} </div>
        <div className="venues-cell">{props.numOfPeople}</div>
        <div className="venues-cell">{props.createdAt.slice(0, 10)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  return {
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
  connect(mapStateToProps, mapDispatchToProps)(SingleRequest)
);
