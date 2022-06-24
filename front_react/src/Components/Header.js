import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="/home" className="navbar-brand">
                Employee management
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active ">
                  <a class="nav-link" href="/homeemployees">
                    Employees 
                  </a>
                </li>
                <li class="nav-item active ">
                  <a class="nav-link" href="/homefreelancers">
                    Freelancers 
                  </a>
                </li>
                <li class="nav-item active ">
                  <a class="nav-link" href="/homedepartements">
                    Departements 
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
