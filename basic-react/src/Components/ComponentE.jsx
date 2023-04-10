import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

export default class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {username => {
            return <div>Hello Component E - {username}</div>
        }}
      </UserConsumer>
    )
  }
}
