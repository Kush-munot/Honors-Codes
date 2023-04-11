import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext'

export class ComponentD extends Component {
    //static contextType = UserContext
    render() {
        return (
            <div>
                Component D - {this.context}
                <ComponentE />
            </div>
        )
    }
}
//Outside class component part
ComponentD.contextType = UserContext
export default ComponentD;