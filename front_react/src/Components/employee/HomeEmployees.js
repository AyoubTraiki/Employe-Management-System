import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployee from "./CreateEmployee";
import ListEmployee from "./ListEmployee";
import UpdateEmployee from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";

function HomeEmployees() {
  return (
    <div>
    <Router>
        <Switch>
          <Route exact path="/homeemployees"  component={ListEmployee}></Route>
          <Route  path="/employees" component={ListEmployee}></Route>
          <Route  path="/save" component={CreateEmployee}></Route>
          <Route  path="/update/:id" component={UpdateEmployee}></Route>
          <Route  path="/view/:id" component={ViewEmployee}></Route>
        </Switch>
    </Router>
  </div>
  )
}

export default HomeEmployees