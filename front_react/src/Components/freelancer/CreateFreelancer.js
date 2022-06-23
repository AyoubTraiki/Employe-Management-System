import React, { Component } from "react";
import FreelancerActions from "./FreelancerActions";

export default class CreateFreelancer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      numtel: "",
      typecontract: "",
      departement: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeNumTelHandler = this.changeNumTelHandler.bind(this);
    this.changeTypeContractHandler = this.changeTypeContractHandler.bind(this);
    this.changeDepartementHandler = this.changeDepartementHandler.bind(this);
    this.saveFreelancer = this.saveFreelancer.bind(this);
  }
  saveFreelancer = (e) => {
    e.preventDefault();
    let freelancer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      numtel: this.state.numtel,
      typecontract: this.state.typecontract,
      departement: this.state.departement,
    };
    console.log('freelancer => ' + JSON.stringify(freelancer));
    FreelancerActions.saveFreelancer(freelancer).then(res=>{
        this.props.history.push('/freelancers');

    })
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeNumTelHandler = (event) => {
    this.setState({ numtel: event.target.value });
  };

  changeTypeContractHandler = (event) => {
    this.setState({ typecontract: event.target.value });
  };
  changeDepartementHandler = (event) => {
    this.setState({ departement: event.target.value });
  };
  cancel(){
    this.props.history.push('/freelancers');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Freelancer</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstname}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> E-mail: </label>
                    <input
                      placeholder="E-mail"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Numtel: </label>
                    <input
                      placeholder="NumTel"
                      name="numtel"
                      className="form-control"
                      value={this.state.numtel}
                      onChange={this.changeNumTelHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> typecontract: </label>
                    <input
                      placeholder="typecontract"
                      name="typecontract"
                      className="form-control"
                      value={this.state.typecontract}
                      onChange={this.changeTypeContractHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> departement: </label>
                    <input
                      placeholder="departement"
                      name="departement"
                      className="form-control"
                      value={this.state.departement}
                      onChange={this.changeDepartementHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveFreelancer}
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
