import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "./ComponentStyles.css";
import axios from 'axios';

// Check if the next line is correct
// import { APIData } from "/job-searching/job-back-end/server.js"
const SearchBar = () => {
  const [searchInput, setSearchInput]= useState("");
  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/info').then((res) => {
      console.log(res)
      setData(res.data)
      console.log(res.data)
    })
  },[])

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    Data.filter((company) => {
      return company.name.match(searchInput);
    });
    
  }
  return (
    <div class="chow">
        <input type="search" id="myInput" onChange={handleChange} placeholder="Search for names" value = "searchInput"></input>
    <>
    <center>
    <table class="blueTable" id="myTable">
    <thead>
        <tr>
          <th>Company Name</th>
          <th>Location</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead> 
    {Data.map((item, key) => (
    <tr>
        <td>{item.name}</td>
        <td>{item.location}</td>
        <td>{item.details}</td>
        <td><a href={item.link} rel="nofollow">Apply</a></td>
    </tr>
    ))}
    </table> 
  </center>

  </>
  </div>
  )
}

export default SearchBar;
