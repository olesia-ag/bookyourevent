import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bookDate } from "../store/makebooking";

class BookForm extends React.Component {

  handleSubmit = (event)=> {
    event.preventDefault()
    // console.log("handlesubmit")
    this.props.bookDate(this.props.checkedDate);
  };

  render() {
    // console.log("book form props", this.props);
    return (
      <div className="form">
        <h3>Date: {this.props.checkedDate.toUTCString().slice(0, 16)} </h3>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          {/* <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE in book form", state);
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
