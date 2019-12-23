import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BookForm extends React.Component {
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

  render() {
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
  return {
    checkedDate: state.calendar.checkedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkDate: date => dispatch(checkDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
