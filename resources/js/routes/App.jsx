import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {Main} from "../components/Main";
import {NotFound} from "./NotFound";
import { Home } from './Home';
import Product from "./Product";
import Admin from "./Admin";
function App() {
  return (
    <Router>
    <Main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/product/:name" component={Product}/>
      <Route path="/admin" component={Admin}/>
      <Route component={NotFound}/>
    </Switch>
      </Main>
      </Router>
  );
}

export default App;
