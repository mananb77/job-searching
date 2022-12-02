import { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header.js"
import SearchBar from "./components/SearchBar.js";
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar/>
      <TableRows/>

    </>
  );
}

function TableRows() {
  const [Data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/info').then((res) => {
      console.log(res)
      setData(res.data)
      console.log(res.data)
    })
    
  },[])

  return (
    <>
      <center>
      <table class="blueTable">
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
    );
  }
export default App;