import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.incrementbyf = this.incrementbyf.bind(this)
        this.decrementbyf = this.decrementbyf.bind(this)
    }
    increment() {
        // this.setState({
        //     counter: this.state.counter + 1
        // },
        //     () => {
        //         console.log('Callback value = ', this.state.counter);
        //     });
        this.setState(
            (prevState, props) => ({
                counter: prevState.count + 1,
            }),
            () => {
                console.log("callback: ", this.state.counter);
            }
        );

    }
    incrementbyf() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrementbyf() {
        this.setState({
            counter: this.state.counter - 5
        },
            () => {
                console.log('Callback value = ', this.state.counter);
            });

    }
    render() {
        return (
            <div>
                <h1>Counter - {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button> <br />
                <button onClick={this.incrementbyf()}>Increment By Five</button> <br />
                <button onClick={this.decrementbyf}>Decrement By Five</button>
            </div>
        )
    }
}
