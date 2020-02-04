import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getAllVenues } from "../store/venue";
import { bookDate } from "../store/makebooking";
import SingleVenue from "./singlevenue";

const AllVenues = props => {
  const getVenues = venuesArr => {
    if (venuesArr.length === 0) {
      props.getAllVenues();
    }
  };
  getVenues(props.venues);
  return (
    <div>
      <header className="venues-header">
        <div className="venues-cell">Name:</div>
        <div className="venues-cell"> Max Capacity:</div>
        <div className="venues-cell">Dates booked</div>
      </header>
      <div>
        {props.venues.map((venue, ind) => (
          <SingleVenue
            id={venue.id}
            name={venue.name}
            maxcapacity={venue.maxcapacity}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    venues: state.venue.venues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVenues: () => dispatch(getAllVenues())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllVenues);
