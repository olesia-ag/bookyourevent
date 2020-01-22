import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch, Route} from "react-router-dom";
import history from "./history";
import store from "./store";
import Homepage from "./components/homepage"
import {BookForm, Venue } from "./components";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
          <Route path="/bookform" component={BookForm} />
          <Route path="/venue" component={Venue} />
          <Route exact path="/" component={Homepage} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
