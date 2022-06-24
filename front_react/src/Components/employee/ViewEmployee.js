import React, { Component } from 'react'
import EmployeeActions from "./EmployeeActions";

export default class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeActions.findEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstname }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { this.state.employee.lastname }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email: </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Function: </label>
                            <div> { this.state.employee.function }</div>
                        </div>
                        <div className = "row">
                            <label> Employee salary: </label>
                            <div> { this.state.employee.salary }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Grade: </label>
                            <div> { this.state.employee.grade }</div>
                        </div>
                        <div className = "row">
                            <label> Employee date creation: </label>
                            <div> { this.state.employee.datecreation }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
