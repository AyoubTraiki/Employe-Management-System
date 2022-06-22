import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployee from "./Components/CreateEmployee";
import Header from "./Components/Header";
import ListEmployee from "./Components/ListEmployee";
import UpdateEmployee from "./Components/UpdateEmployee";
import ViewEmployee from "./Components/ViewEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/"  component={ListEmployee}></Route>
            <Route  path="/employees" component={ListEmployee}></Route>
            <Route  path="/save" component={CreateEmployee}></Route>
            <Route  path="/update/:id" component={UpdateEmployee}></Route>
            <Route  path="/view/:id" component={ViewEmployee}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
