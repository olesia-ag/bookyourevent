import React from "react";
import Form from "./form";
import Calendar from "./calendar";
import { withRouter} from "react-router-dom";

const renderCalendar = props => {
  if (props.location.pathname !== "/bookform") {
    return (
      <div className="calendar-container">
        <Calendar />
      </div>
    );
  }
};

const renderForm = props => {
  if (props.location.pathname !== "/bookform") {
    return (
      <div className="form">
        <Form />
      </div>
    );
  }
};

const Homepage = props => {
  console.log("props in homepage:", props);
  return (
    <div>
      <div className="home">
        {renderCalendar(props)}
        {renderForm(props)}
      </div>
    </div>
  );
};

export default withRouter(Homepage);
