import React, { Component } from 'react'
import FreelancerActions from "./FreelancerActions";

export default class ViewFreelancer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            freelancer: {}
        }
    }

    componentDidMount(){
        FreelancerActions.findFreelancerById(this.state.id).then( res => {
            this.setState({freelancer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Freelancer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Freelancer First Name: </label>
                            <div> { this.state.freelancer.firstname }</div>
                        </div>
                        <div className = "row">
                            <label> Freelancer Last Name: </label>
                            <div> { this.state.freelancer.lastname }</div>
                        </div>
                        <div className = "row">
                            <label> Freelancer Email: </label>
                            <div> { this.state.freelancer.email }</div>
                        </div>
                        <div className = "row">
                            <label> Freelancer Numtel: </label>
                            <div> { this.state.freelancer.numtel }</div>
                        </div>
                        <div className = "row">
                            <label> Freelancer typecontract: </label>
                            <div> { this.state.freelancer.typecontract }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
