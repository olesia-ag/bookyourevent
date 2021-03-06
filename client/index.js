import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import store from "./store";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import {
  BookForm,
  SingleVenue,
  AllVenues,
  Login,
  CreateRequest,
  Confirmation,
  AllRequests
} from "./components";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Navbar />

      <Switch>
        <Route path="/bookform" component={BookForm} />
        <Route path="/submitrequest" component={CreateRequest} />
        <Route path="/singlevenue" component={SingleVenue} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/requests" component={AllRequests} />>
        <Route path="/allvenues" component={AllVenues} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
