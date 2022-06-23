import React, { Component } from 'react'
import DepartementActions from "./DepartementActions";

export default class ViewDepartement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            departement: {}
        }
    }

    componentDidMount(){
        DepartementActions.findDepartementById(this.state.id).then( res => {
            this.setState({departement: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Departement Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Departement code: </label>
                            <div> { this.state.departement.codedepartement }</div>
                        </div>
                        <div className = "row">
                            <label> Departement Name: </label>
                            <div> { this.state.departement.namedepartement }</div>
                        </div>
                        <div className = "row">
                            <label> Departement Email: </label>
                            <div> { this.state.departement.nbremployee }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
