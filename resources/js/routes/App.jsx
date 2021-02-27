import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {Main} from "../components/Main";
import {NotFound} from "./NotFound";
import { Home } from './Home';
import Product from "./Product";
function App() {
  return (
    <Router>
    <Main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/product" component={Product}/>
      <Route component={NotFound}/>
    </Switch>
      </Main>
      </Router>
  );
}

export default App;
