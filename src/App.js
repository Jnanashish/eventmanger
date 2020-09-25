import React from "react";

// Router
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

import Header from "./components/layout/Header.js";
import Event from "./components/Event.js";
import AddEvents from "./components/AddEvents";
function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={Event} />
            <Route exact path="/add" component={AddEvents} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
