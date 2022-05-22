import React, { Component } from "react";
import EmployeeActions from "./EmployeeActions";

export default class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
  }
  componentDidMount() {
    EmployeeActions.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  viewEmployee(id){
    this.props.history.push(`/view/${id}`);
}
  removeEmployee(id){
    EmployeeActions.removeEmployee(id).then( res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
}
  addEmployee() {
    this.props.history.push("/save");
  }
  updateEmployee(id){
    this.props.history.push(`/update/${id}`);
}
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
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
                <th scope="col">Function</th>
                <th scope="col">Salary</th>
                <th scope="col">Grade</th>
                <th scope="col">Date_Creation</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.email}</td>
                  <td>{employee.function}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.grade}</td>
                  <td>{employee.dateCreation}</td>
                  <td>
                  <button onClick={ () => this.updateEmployee(employee.id)} className="btn btn-info">Update </button>
                  <button style={{marginLeft: "4px"}} onClick={ () => this.removeEmployee(employee.id)} className="btn btn-danger">Delete </button>
                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
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
