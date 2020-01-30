import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { createRequest, addRequest } from "../store/request";
import Confirmation from "./confirmation";

class CreateRequest extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let newRequest = {
      date: this.props.date,
      email: this.props.email,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      budget: this.props.budget,
      numOfPeople: this.props.numOfPeople,
      comment: this.props.comment
    };
    this.props.createRequest(newRequest);
    this.props.history.push({
      pathname: "./confirmation",
      state: { date: this.props.date }
    });
  };

  handleChange = event => {
    this.props.addRequest(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="form">
        <h3>Date: {this.props.date.toUTCString().slice(0, 16)} </h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="firstName"> First Name *</label>
          <input type="text" name="firstName" onChange={this.handleChange} />
          <label htmlFor="lasttName"> Last Name*</label>
          <input type="text" name="lastName" onChange={this.handleChange} />
          <label htmlFor="email"> Email*</label>
          <input type="text" name="email" onChange={this.handleChange} />
          <label htmlFor="numOfPeople"> Approximate attendance number</label>
          <input
            type="number"
            name="numOfPeople"
            onChange={this.handleChange}
          />
          <label htmlFor="budget"> Your budget (USD) </label>
          <input type="number" name="budget" onChange={this.handleChange} />
          <label htmlFor="comment"> Additional Comments: </label>
          <input type="number" name="comment" onChange={this.handleChange} />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
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
  connect(mapStateToProps, mapDispatchToProps)(CreateRequest)
);
