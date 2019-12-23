import React from "react";
import { Link } from "react-router-dom";
import { Form, Calendar } from "./index";

export const Homepage = () => {
  return (
    <div>
      <div className="home">
        <div className="calendar-container">
          <Calendar />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};


