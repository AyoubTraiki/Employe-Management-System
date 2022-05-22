import React, { Component } from 'react'
import EmployeeActions from "./EmployeeActions";

export default class UpdateEmployee extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.match.params.id,
          firstname: "",
          lastname: "",
          email: "",
          function: "",
          salary: "",
          grade: "",
          dateCreation: "",
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeFunctionHandler = this.changeFunctionHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeGradeHandler = this.changeGradeHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
      }
      componentDidMount(){
          EmployeeActions.findEmployeeById(this.state.id).then((res)=>{
              let employee=res.data;
              this.setState({
                firstname: employee.firstname,
                lastname: employee.lastname,
                email: employee.email,
                function: employee.function,
                salary: employee.salary,
                grade: employee.grade,
              })
          })
      }
      updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          function: this.state.function,
          salary: this.state.salary,
          grade: this.state.grade,
        };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeActions.updateEmployee(employee,this.state.id).then( res =>{
            this.props.history.push('/employees');
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
      changeFunctionHandler = (event) => {
        this.setState({ function: event.target.value });
      };
    
      changeSalaryHandler = (event) => {
        this.setState({ salary: event.target.value });
      };
      changeGradeHandler = (event) => {
        this.setState({ grade: event.target.value });
      };
      cancel(){
        this.props.history.push('/employees');
      }
    
      render() {
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className="text-center">Update Employee</h3>
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
                        <label> Function: </label>
                        <input
                          placeholder="Function"
                          name="function"
                          className="form-control"
                          value={this.state.function}
                          onChange={this.changeFunctionHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label> Salary: </label>
                        <input
                          placeholder="Salary"
                          name="salary"
                          className="form-control"
                          value={this.state.salary}
                          onChange={this.changeSalaryHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label> Grade: </label>
                        <input
                          placeholder="Grade"
                          name="grade"
                          className="form-control"
                          value={this.state.grade}
                          onChange={this.changeGradeHandler}
                        />
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={this.updateEmployee}
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
