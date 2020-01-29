import React from "react";
import Form from "./form";
import Calendar from "./calendar";
import { withRouter } from "react-router-dom";

const Confirmation = props => {
  return (
    <div className="home">
     <p>Thank you. Your request has been submitted.</p>
    </div>
  );
};

export default withRouter(Confirmation);
