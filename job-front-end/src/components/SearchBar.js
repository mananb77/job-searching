import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "./ComponentStyles.css";

// Check if the next line is correct
// import { APIData } from "/job-searching/job-back-end/server.js"
const SearchBar = ({ }) => {
  return (
    <div class="search-bar-container">
      <p>Search here:</p>
      <br />
      <input type="search" 
        class="search-bar" 
        placeholder="Search"></input>
    </div>
  )
}

export default SearchBar;
