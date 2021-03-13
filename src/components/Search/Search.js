import React, { useContext } from 'react';
import "../Search/Search.scss";
import EmployeeContext from "../../utils/EmployeeContext.js";

const Search = () => {
    const data = useContext(EmployeeContext);

    return (
        <div className="searchContainer">
            <form>
                <button type="submit" onClick={event => event.preventDefault()}><i className="fas fa-search"></i></button>
                <input 
                type="search"
                placeholder="Search >>"
                onChange={event => data.handleSearch(event)}
                />
            </form>
        </div>
    );
};

export default Search;
