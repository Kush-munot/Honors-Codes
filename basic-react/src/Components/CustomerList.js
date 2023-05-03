import React, { Component } from 'react'
import axios from 'axios';


export default class CustomerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: [],
            searchTerm: ""
        }
    }
    componentDidMount(pervProps, prevState) {
        axios.get('http://localhost:5000/customers').then((res) => {
            this.setState({ customers: res.data })
        }).catch((err) => {
            console.log(err);
        })
    }

    deleteHandler = async (id) => {
        try {
            const resp = await axios.delete("http://localhost:5000/customers/" + id);
            this.setState({
                customers: this.state.customers.filter((resp) => {
                    if (!resp._id.includes(id)) {
                        return resp;
                    }
                }),
            });
        } catch (err) {
            console.log(err);
        }
    };

    renderTableData() {
        return this.state.customers.map((customer, index) => {
            const { _id, id, firstName, lastName, gender, age } = customer
            if (this.state.searchTerm === "" || firstName.toLowerCase().includes(
                this.state.searchTerm.toLowerCase())) {
                return (
                    <tr key={_id}>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{gender}</td>
                        <td>{age}</td>
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
                <table id='customers' align='center'>
                    {this.renderTableData()}
                </table>
            </div>
        )
    }
}
