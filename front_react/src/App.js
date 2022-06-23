import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import HomeFreelancers from "./Components/freelancer/HomeFreelancers";
import HomeEmployees from "./Components/employee/HomeEmployees";
import ListDepartement from "./Components/departement/ListDepartement";
import CreateDepartement from "./Components/departement/CreateDepartment";
import UpdateDepartement from "./Components/departement/UpdateDepartement";
import ViewDepartement from "./Components/departement/ViewDepartement";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/homedepartements"
              component={ListDepartement}
            ></Route>
            <Route path="/departements" component={ListDepartement}></Route>
            <Route path="/save_d" component={CreateDepartement}></Route>
            <Route path="/update_d/:id" component={UpdateDepartement}></Route>
            <Route path="/view_d/:id" component={ViewDepartement}></Route>
            <Route
              exact
              path="/homeemployees"
              component={HomeEmployees}
            ></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/homefreelancers" component={HomeFreelancers}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
