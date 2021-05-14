import React from "react";
import "./style.css"


// Search component created with associated props
function Search(props) {
    return (
        <div className= "row justify-content-center">
            <form>
                <input type="text" className="search" value={props.search} onChange={props.handleChange}/>
            </form>
        </div>
    )
}

export default Search;

