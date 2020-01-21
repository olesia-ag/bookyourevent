import React from "react";
import Form from "./form";
import Calendar from "./calendar";
import { withRouter} from "react-router-dom";


const Homepage = props => {
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

export default withRouter(Homepage);
