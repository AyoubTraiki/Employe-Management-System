import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployee from './ListEmployee';
import Header from './Header'

import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import ViewEmployee from './ViewEmployee';
function Home() {
    return (
        <div>
            <Router>
              <Header/>
              
                    <div className="container">
                        <Switch> 
                              <Route path = "/" exact component = {ListEmployee}></Route>
                              <Route path = "/employees" exact component = {ListEmployee}></Route>
                              <Route path = "/save" exact component = {CreateEmployee}></Route>
                              <Route path = "/update/:id" exact component = {UpdateEmployee}></Route>
                              <Route path = "/view/:id" exact component = {ViewEmployee}></Route>
                              
                        </Switch>
                    </div>
    
            </Router>
        </div>
        
      );
}

export default Home