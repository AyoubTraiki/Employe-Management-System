import React, { Component } from "react";
import FreelancerActions from "./FreelancerActions";


export default class ListFreelancer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freelancers: [],
    };
    this.addFreelancer = this.addFreelancer.bind(this);
    this.updateFreelancer = this.updateFreelancer.bind(this);
    this.removeFreelancer = this.removeFreelancer.bind(this);
  }
  componentDidMount() {
    FreelancerActions.getFreelancers().then((res) => {
      this.setState({ freelancers: res.data });
    });
  }
  viewFreelancer(id){
    this.props.history.push(`/view_f/${id}`);
}
  removeFreelancer(id){
    FreelancerActions.removeFreelancer(id).then( res => {
        this.setState({freelancers: this.state.freelancers.filter(freelancer => freelancer.id !== id)});
    });
}
  addFreelancer() {
    this.props.history.push("/save_f");
  }
  updateFreelancer(id){
    this.props.history.push(`/update_f/${id}`);
}
  render() {
    return (
      <div>
        <h2 className="text-center">Freelancer List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addFreelancer}>
            Add Freelancer
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">First_name</th>
                <th scope="col">Last_name</th>
                <th scope="col">E-mail</th>
                <th scope="col">numtel</th>
                <th scope="col">typecontract</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.freelancers.map((freelancer) => (
                <tr key={freelancer.id}>
                  <td>{freelancer.id}</td>
                  <td>{freelancer.firstname}</td>
                  <td>{freelancer.lastname}</td>
                  <td>{freelancer.email}</td>
                  <td>{freelancer.numtel}</td>
                  <td>{freelancer.typecontract}</td>
                  <td>
                  <button onClick={ () => this.updateFreelancer(freelancer.id)} className="btn btn-info">Update </button>
                  <button style={{marginLeft: "4px"}} onClick={ () => this.removeFreelancer(freelancer.id)} className="btn btn-danger">Delete </button>
                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewFreelancer(freelancer.id)} className="btn btn-info">View </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
