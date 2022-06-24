import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import ListDepartement from "./Components/departement/ListDepartement";
import CreateDepartement from "./Components/departement/CreateDepartment";
import UpdateDepartement from "./Components/departement/UpdateDepartement";
import ViewDepartement from "./Components/departement/ViewDepartement";

import ListEmployee from "./Components/employee/ListEmployee";
import CreateEmployee from "./Components/employee/CreateEmployee";
import UpdateEmployee from "./Components/employee/UpdateEmployee";
import ViewEmployee from "./Components/employee/ViewEmployee";

import ListFreelancer from "./Components/freelancer/ListFreelancer";
import CreateFreelancer from "./Components/freelancer/CreateFreelancer";
import UpdateFreelancer from "./Components/freelancer/UpdateFreelancer";
import ViewFreelancer from "./Components/freelancer/ViewFreelancer";
function App() {
  return (
    <div>
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/homedepartements" component={ListDepartement}></Route>
          <Route path="/departements" component={ListDepartement}></Route>
          <Route path="/save_d" component={CreateDepartement}></Route>
          <Route path="/update_d/:id" component={UpdateDepartement}></Route>
          <Route path="/view_d/:id" component={ViewDepartement}></Route>

          <Route  path="/home"  component={ListEmployee}></Route>
          <Route  path="/homeemployees"  component={ListEmployee}></Route>
          <Route  path="/employees" component={ListEmployee}></Route>
          <Route  path="/save" component={CreateEmployee}></Route>
          <Route  path="/update/:id" component={UpdateEmployee}></Route>
          <Route  path="/view/:id" component={ViewEmployee}></Route>

            <Route  path="/homefreelancers" component={ListFreelancer}></Route>
            <Route  path="/freelancers" component={ListFreelancer}></Route>
            <Route  path="/save_f" component={CreateFreelancer}></Route>
            <Route  path="/update_f/:id" component={UpdateFreelancer}></Route>
            <Route  path="/view_f/:id" component={ViewFreelancer}></Route>
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
