import React from "react";
import  Form  from "./form";
import  Calendar  from "./calendar";


const Homepage = () => {
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

export default Homepage;
