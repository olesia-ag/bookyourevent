import React from "react";
import Form from "./form";
import Calendar from "./calendar";
import { withRouter } from "react-router-dom";

const Confirmation = props => {
  console.log("props in confirmation:", props)

  const renderConfirmation=()=>{
    //props are passed from create request page, if no request was submitted, date would be today's date
    if(!props.history.location.state.date||(props.history.location.state.date&&(props.history.location.state.date===new Date()))){
      return (
          <p>Oops, something went wrong. Most likely you got to this page without choosing the date to request. Please go back to <a href="/">home page</a> to start over.</p>

      )
    }
    else {

      return (
      <p>Thank you. Your request for {props.history.location.state.date.toUTCString().slice(0, 16)}has been submitted.</p>
      )
    }
  }
  return (
    <div className="home">
     {renderConfirmation()}
    </div>
  );
};

export default withRouter(Confirmation);
