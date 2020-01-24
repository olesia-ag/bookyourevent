import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getAllVenues } from "../store/venue";

const AllVenues = (props) => (
<div>
  <h1>hello world</h1>
</div>);

const mapStateToProps = state => {
console.log("state in venues", state)
  return {
    venueName: state.venue.venue.name,
    venueId: state.venue.venue.id,
    venueMaxCapacity: state.venue.venue.maxcapacity,
    venueBookedDates: state.venue.venue.booked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVenues: () => dispatch(getAllVenues())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllVenues));

