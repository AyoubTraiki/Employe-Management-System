import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateFreelancer from "./CreateFreelancer";
import ListFreelancer from "./ListFreelancer";
import UpdateFreelancer from "./UpdateFreelancer";
import ViewFreelancer from "./ViewFreelancer";

function HomeFreelancers() {
  return (
    <div>
      <Router>
          <Switch>
            <Route  path="/homefreelancers" component={ListFreelancer}></Route>
            <Route  path="/freelancers" component={ListFreelancer}></Route>
            <Route  path="/save_f" component={CreateFreelancer}></Route>
            <Route  path="/update_f/:id" component={UpdateFreelancer}></Route>
            <Route  path="/view_f/:id" component={ViewFreelancer}></Route>
          </Switch>

      </Router>
    </div>
  )
}

export default HomeFreelancers