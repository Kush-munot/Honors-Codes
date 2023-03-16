import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message:"Hello",
        };
    }
    clickHandler(){
        this.setState({
            message:"Clicked",
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>{
            this.clickHandler();
        }}>Click Me</button>
      </div>
    )
  }
}
