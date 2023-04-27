import React, { Component } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'

export default class CustomerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: [],
            searchTerm: ""
        }
    }
    componentDidMount(pervProps, prevState) {
        axios.get('http://localhost:8090/customers').then((res) => {
            this.setState({ customers: res.data })
        }).catch((err) => {
            console.log(err);
        })
    }

    /* deleteHandler = id => {
        axios.delete
    } */

    renderTableData() {
        return this.state.customers.map((customer, index) => {
            const { _id, id, firstName, lastName, gender, age } = customer
            if (this.state.searchTerm === "" || firstName.toLowerCase().includes(
                this.state.searchTerm.toLowerCase())) {
                return (
                    <tr key={_id}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td><button onClick={() => this.editHandler(_id)}>Edit</button></td>
                        <td><button onClick={() => this.deleteHandler(_id)}>Delete</button></td>
                    </tr>
                )
            }
        })
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Search...'
                    onChange={(event) => this.searchText(event.target.value)}></input>
                <table id='customers'>
                    <body>
                        {this.renderTableData()}
                    </body>
                </table>
            </div>
        )
    }
}
