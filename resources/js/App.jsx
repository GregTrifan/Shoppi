import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {Main} from "./components/Main";
import {NotFound} from "./routes/NotFound";
import { Home } from './routes/Home';
import Product from "./routes/Product";
import Admin from "./routes/Admin";
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
