import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import TpAgent from "./TpAgent";
import Landing from "./Landing";
import EvModel from "./EvModel"
import EvEvaluate from "./EvEvaluate"
import EvEvaluate1 from "./EvEvaluate1"

import * as serviceWorker from "./serviceWorker";

import {
  HashRouter as 
  Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

ReactDOM.render(
  // <TpAgent/>,
  <Router>
    <TpAgent>
        <Route exact path="/" component={Landing} />
        <Route path="/evaluate/model" component={EvModel} />
        <Route path="/evaluate/process" component={EvEvaluate} />
        <Route path="/evaluate/process1" component={EvEvaluate1} />

    </TpAgent>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
