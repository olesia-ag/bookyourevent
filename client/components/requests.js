import React from "react";
import Form from "./form";
import Calendar from "./calendar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Requests = props => {
  return (
    <div className="home">
      <div className="calendar-container">
        <Calendar />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state in submit requet:", state);
  return {
    checkedDate: state.calendar.checkedDate,
    date: state.calendar.checkedDate,
    email: state.request.email,
    firstName: state.request.firstName,
    lastName: state.request.lastName,
    budget: state.request.budget,
    numOfPeople: state.request.numOfPeople,
    comment: state.request.comment,
    submitted: state.request.submitted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRequest: request => dispatch(createRequest(request)),
    addRequest: (name, value) => dispatch(addRequest(name, value))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Requests)
);
