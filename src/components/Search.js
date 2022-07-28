import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
