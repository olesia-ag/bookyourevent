import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkDate } from "../store/calendar";
import beenCalled from "./form"

class BookForm extends React.Component {


  render() {
    console.log("book form props", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Book form component</h1>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE in book form", state)
  return {
    checkedDate: state.calendar.checkedDate,
    isAvailable: state.calendar.isAvailable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkDate: date => dispatch(checkDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);

