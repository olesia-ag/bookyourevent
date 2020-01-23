import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import store from "./store";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import { BookForm, Venue, Login } from "./components";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/bookform" component={BookForm} />
        <Route path="/venue" component={Venue} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
