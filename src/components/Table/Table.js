import React from "react";

function Table(props) {
    // map through results pull each person object and give an index so that key value could be assigned
    const people = props.results.map((person, i) => {
        return (
            <tr key={i}>
                <th scope = "row"><img src={person.image} alt="person"/></th>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob}</td>

            </tr>
        )
    })
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={() => props.sortBy('name')}>Name &#8597;</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col" onClick={() => props.sortBy('age')}>D.O.B &#8597;</th>
                </tr>
            </thead>
            <tbody>
                {people}
            </tbody>
        </table>
    )
}
export default Table;