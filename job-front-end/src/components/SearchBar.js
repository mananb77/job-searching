import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "./ComponentStyles.css";

// Check if the next line is correct
// import { APIData } from "/job-searching/job-back-end/server.js"
const SearchBar = ({}) => {
  return (
    <div class="chow">
        <input type="search" id="myInput" onkeyup= {myFunction()} placeholder="Search for names" title="Type in a name"></input>
      </div>
  )
}

export default SearchBar;
