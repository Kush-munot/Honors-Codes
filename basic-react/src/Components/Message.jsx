import React,{Component} from "react"
export default class Message extends Component {

    constructor() {
        super();

        this.state = {
            message: "This is a message",
        };
    }

    changeMessage() {
        this.setState({ message: "Hello see the magic !!" });
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click Me !!</button>
            </div>
        )
    }

}