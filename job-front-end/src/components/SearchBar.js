import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "./ComponentStyles.css";

// Check if the next line is correct
// import { APIData } from "/job-searching/job-back-end/server.js"

const [searchInput, setSearchInput] = useState("");
const [filteredResults, setFilteredResults] = useState([]);

const searchItems = (searchValue) => {
  // set the search input to the value in the textbox typed by the user
  setSearchInput(searchValue);

  // if search input empty then show all the data
  if (searchInput !== "") {
    const filteredData = APIData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  } else {
    setFilteredResults(APIData);
  }
};

const SearchBar = ({}) => {
  return (
    <div class="search-bar-container">
      <p>Search here:</p>
      <br />
      <input
        type="search"
        class="search-bar"
        placeholder="Search"
        onChange={(e) => searchItems(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
