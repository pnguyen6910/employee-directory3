import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Search(props) {

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Employee Name"
                aria-label="Employee Name"
                aria-describedby="basic-addon1"
                onChange={e => props.findCountry(e.target.value)}
            />
        </InputGroup>
    )
}

export default Search