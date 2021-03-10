import React from 'react';
import "../Search/Search.scss"

const Search = () => {
    return (
        <div className="searchContainer">
            <form>
                <button type="submit"><i class="fas fa-search"></i></button>
                <input 
                type="search"
                placeholder="SEARCH >>"/>
            </form>
        </div>
    );
};

export default Search;
