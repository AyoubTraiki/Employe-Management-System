import React, { Component } from "react";
import FreelancerActions from "./FreelancerActions";

export default class UpdateFreelancer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstname: "",
      lastname: "",
      email: "",
      numtel: "",
      typecontract: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeNumTelHandler = this.changeNumTelHandler.bind(this);
    this.changeTypeContractHandler = this.changeTypeContractHandler.bind(this);
    this.updateFreelancer = this.updateFreelancer.bind(this);
  }
  componentDidMount() {
    FreelancerActions.findFreelancerById(this.state.id).then((res) => {
      let freelancer = res.data;
      this.setState({
        firstname: freelancer.firstname,
        lastname: freelancer.lastname,
        email: freelancer.email,
        numtel: freelancer.numtel,
        typecontract: freelancer.typecontract,
      });
    });
  }
  updateFreelancer = (e) => {
    e.preventDefault();
    let freelancer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      numtel: this.state.numtel,
      typecontract: this.state.typecontract,
    };
    console.log("freelancer => " + JSON.stringify(freelancer));
    console.log("id => " + JSON.stringify(this.state.id));
    FreelancerActions.updateFreelancer(freelancer, this.state.id).then(
      (res) => {
        this.props.history.push("/freelancers");
      }
    );
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
  cancel() {
    this.props.history.push("/freelancers");
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
                    <label> Num tel: </label>
                    <input
                      placeholder="NumTel"
                      name="numtel"
                      className="form-control"
                      value={this.state.numtel}
                      onChange={this.changeNumTelHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> type contract: </label>
                    <input
                      placeholder="typecontract"
                      name="typecontract"
                      className="form-control"
                      value={this.state.typecontract}
                      onChange={this.changeTypeContractHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateFreelancer}
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
