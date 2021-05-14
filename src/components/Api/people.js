import React , { Component } from "react";
// import Search from "../Search/Search";
import axios from "axios";
// let resArray;


class People extends Component {
    state = {
        search: "",
        results: []
    }

    // Make api call and exclude unwanted data
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=100&exc=location,login,cell,gender,id,nat,registered")
            .then(response => {
                console.log(response);
                // resArray = response.data.results

            })
    }

    render () {
        return (console.log);
    }
}

export default People;
