import React, { Component } from "react";
import DepartementActions from "./DepartementActions";

export default class CreateDepartement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      codedepartement: "",
      namedepartement: "",
      nbremployee: "",
    };
    this.changeCodeDepartementHandler = this.changeCodeDepartementHandler.bind(this);
    this.changeNameDepartementHandler = this.changeNameDepartementHandler.bind(this);
    this.changeNbrEmployeeHandler = this.changeNbrEmployeeHandler.bind(this);
    this.saveDepartement = this.saveDepartement.bind(this);
  }
  saveDepartement = (e) => {
    e.preventDefault();
    let departement = {
      codedepartement: this.state.codedepartement,
      namedepartement: this.state.namedepartement,
      nbremployee: this.state.nbremployee,
    };
    console.log('departement => ' + JSON.stringify(departement));
    DepartementActions.saveDepartement(departement).then(res=>{
        this.props.history.push('/departements');

    })
  };
  changeCodeDepartementHandler = (event) => {
    this.setState({ codedepartement: event.target.value });
  };
  changeNameDepartementHandler = (event) => {
    this.setState({ namedepartement: event.target.value });
  };

  changeNbrEmployeeHandler = (event) => {
    this.setState({ nbremployee: event.target.value });
  };
  cancel(){
    this.props.history.push('/departements');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Departement</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> code departement: </label>
                    <input
                      placeholder="code departement"
                      name="codedepartement"
                      className="form-control"
                      value={this.state.codedepartement}
                      onChange={this.changeCodeDepartementHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> name departement: </label>
                    <input
                      placeholder="name departement"
                      name="namedepartement"
                      className="form-control"
                      value={this.state.namedepartement}
                      onChange={this.changeNameDepartementHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> nbr employee: </label>
                    <input
                      placeholder="nbr employee"
                      name="nbremployee"
                      className="form-control"
                      value={this.state.nbremployee}
                      onChange={this.changeNbrEmployeeHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveDepartement}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
