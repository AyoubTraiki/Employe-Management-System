import React, { Component } from "react";
import DepartementActions from "./DepartementActions";


export default class ListDepartement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departements: [],
    };
    this.addDepartement = this.addDepartement.bind(this);
    this.updateDepartement = this.updateDepartement.bind(this);
    this.removeDepartement = this.removeDepartement.bind(this);
  }
  componentDidMount() {
    DepartementActions.getDepartements().then((res) => {
      this.setState({ departements: res.data });
    });
  }
  viewDepartement(id){
    this.props.history.push(`/view_d/${id}`);
}
  removeDepartement(id){
    DepartementActions.removeDepartement(id).then( res => {
        this.setState({departements: this.state.departements.filter(departement => departement.id !== id)});
    });
}
  addDepartement() {
    this.props.history.push("/save_d");
  }
  updateDepartement(id){
    this.props.history.push(`/update_d/${id}`);
}
  render() {
    return (
      <div>
        <h2 className="text-center">Departement List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addDepartement}>
            Add Departement
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">codedepartement</th>
                <th scope="col">namedepartement</th>
                <th scope="col">nbremployee</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departements.map((departement) => (
                <tr key={departement.id}>
                  <td>{departement.id}</td>
                  <td>{departement.codedepartement}</td>
                  <td>{departement.namedepartement}</td>
                  <td>{departement.nbremployee}</td>
                  <td>
                  <button onClick={ () => this.updateDepartement(departement.id)} className="btn btn-info">Update </button>
                  <button style={{marginLeft: "4px"}} onClick={ () => this.removeDepartement(departement.id)} className="btn btn-danger">Delete </button>
                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewDepartement(departement.id)} className="btn btn-info">View </button>
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
