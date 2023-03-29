import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comments: "",
        };
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handleCommentsChange = (event) => {
        this.setState({ comments: event.target.value });
    };

    handleSubmit = (event) => {

    }
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange} />
                    <br/><br/><br/>
                    <label>Comments:</label><br/>
                    <textarea cols="30" rows="1" value={this.state.comments} onChange={this.handleComments}></textarea> <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
