import { useState, useEffect } from "react";
import "./ComponentStyles.css";


const SearchBar = ({ }) => {
  return (
    <div class="search-bar-container">
      <p>Search here:</p>
      <br />
      <input type="search" class="search-bar"></input>
    </div>
  )
}

// on return, connect that to the Table
// send the value to the Table

export default SearchBar;
