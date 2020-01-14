import React from "react";

import Routes from "./routes";
import Homepage from "./components/homepage";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Homepage />
      <Routes />
    </div>
  );
};

export default withRouter(App);
