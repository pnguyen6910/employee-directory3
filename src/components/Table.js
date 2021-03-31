import React, { Component } from 'react';
import API from '../utils/api'
import Employee from './Employee'
import '../styles/table.css';

class Table extends Component {
    state = {
        employees: [],
        shownEmployees: []
    }

    componentDidMount() {
        API.randomEmployee()
            .then(response => {
                this.setState({ 'employees': response.data.results, 'shownEmployees': response.data.results })
                console.log(this.state.employees)
            })
            .catch(error => console.log(error))
    }

    updateEmployees() {
        const filteredResults = this.state.employees.filter(employee => employee.location.contry === this.props.contrySearched);
    }

    render() {
        return (
            <div className="responsive-table table-styles">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Picture</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shownEmployees.map((employee, index) => {
                            return (
                                <Employee
                                    key={index}
                                    employeeKey={index + 1}
                                    image={employee.picture.thumbnail}
                                    firstName={employee.firstName}
                                    lastName={employee.lastName}
                                    phone={employee.phone}
                                    email={employee.email}
                                    location={`${employee.location.city}, ${employee.location.country}`}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table