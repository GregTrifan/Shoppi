import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {Main} from "../components/Main";
import {NotFound} from "./NotFound";
import { Home } from './Home';
function App() {
  return (
    <Router>
    <Main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound}/>
    </Switch>
      </Main>
      </Router>
  );
}

export default App;
