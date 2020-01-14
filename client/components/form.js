import React from "react";
import { checkDate } from "../store/calendar";
import { connect } from "react-redux";
import { Link, Router } from "react-router-dom";
import Routes from "../routes";

let beenCalled = React.createContext(false);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAvailability = this.getAvailability.bind(this);
    this.printAvailability = this.printAvailability.bind(this);
  }

  getAvailability() {
    beenCalled = true;
    this.props.checkDate(this.props.selectedDate);
  }

  printAvailability() {
    console.log("print availability was called")
    if (beenCalled === true) {
      if (this.props.isAvailable === true) {
        return (
          <div>
            <div>{this.props.checkedDate.toUTCString().slice(0, 16)}</div>
            <p>is available! </p>
            <Link to="/bookform">
                <button type="submit">book the date</button>
                </Link>
          </div>
        );
      } else {
        return (
          <p>
            We're sorry, your date is not available, please select another date
          </p>
        );
      }
    } else {
      return <p>Please select a date to check!</p>;
    }
  }
  render() {
    return (
      <div>
        <h4>Please pick a date and click 'check availability'</h4>
        <h5>
          date selected is: {this.props.selectedDate.toUTCString().slice(0, 16)}
        </h5>
        <button type="submit" onClick={this.getAvailability}>
          check availabity
        </button>
        {/* <Link to="/bookform">
          <button type="button">Secure the date</button>
        </Link> */}

        <div>{this.printAvailability()}</div>
        {console.log(this.props.isAvailable)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate,
    isAvailable: state.calendar.isAvailable,
    checkedDate: state.calendar.checkedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkDate: date => dispatch(checkDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
