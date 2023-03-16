import React, { Component } from 'react'

export default class UserGreet extends Component {
    constructor() {
        super()
        this.state = {
            loggedin: false,
        }
    };
    checker() {
        this.setState({
            loggedin: true,
        })
    };
    render() {
        return (
            <div>
                <h1> </h1>
                <button onClick={this.checker}>ClickMe</button>
            </div>
        )
    }
}
