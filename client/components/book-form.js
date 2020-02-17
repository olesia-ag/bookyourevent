import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bookDate } from "../store/makebooking";

class BookForm extends React.Component {

  handleSubmit = (event)=> {
    event.preventDefault()

    this.props.bookDate(this.props.checkedDate);
  };

  render() {

    return (
      <div className="form">
        <h3>Date: {this.props.checkedDate.toUTCString().slice(0, 16)} </h3>
        <form onSubmit={(event)=>this.handleSubmit(event)}>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    checkedDate: state.calendar.checkedDate,
    isAvailable: state.calendar.isAvailable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookDate: date => dispatch(bookDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
