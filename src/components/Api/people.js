import React , { Component } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table"
import axios from "axios";

let resArray;


class People extends Component {
    state = {
        search: "",
        results: [],
        ascending: true
    }

    // Make api call and exclude unwanted data
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=100&exc=location,login,cell,gender,id,nat,registered")
            .then(response => {
                console.log(response);
                resArray = response.data.results.map(person => {
                    var dateString = person.dob.date;
                    var date = new Date(dateString);
                    var correctDate = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
                    console.log(correctDate);
                    return {
                        image:person.picture.medium,
                        name:`${person.name.first} ${person.name.last}`,
                        phone: person.phone,
                        email: person.email,
                        dob:correctDate,
                        age: person.dob.age
                    }
                })

                this.setState({ results: resArray });
            })
            .catch((err) => {
                console.log(err);
            });
            
    }

    // Handle OnChange on search input
    handleChange = event => {
        const key = event.target.value;
        const filtered = resArray.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(key)));

        this.setState({
            search: event.target.value,
            results: filtered
        })
    }

    sortBy = key => {
        if(this.state.ascending === true) {
            const sortUp = this.state.results.sort((a, b) => a[key] < b[key] ? 1: -1);
            this.setState({
                results: sortUp,
                ascending: false
            })
        } else {
            const sortDown = this.state.results.sort((a, b) => a[key] > b[key] ? 1: -1);
            this.setState({
                results: sortDown,
                ascending:true
            })
        }
    }

    render () {
        
        return (
            <div>
                <Search search={this.state.search} handleChange= {this.handleChange} />
                <Table results={this.state.results} sortBy={this.sortBy} />

            </div>

        )
    }
}

export default People;
