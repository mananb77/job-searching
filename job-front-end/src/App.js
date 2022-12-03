import { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header.js"
import SearchBar from "./components/SearchBar.js";
import Footer from "./components/Footer.js"

function App() {
  const [filter,  setFliter]= useState("")
  function myFunction(e) {
    setFliter(e.target.value);
  }
  return (
    <>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <div class="chow">
        <input type="text" id="myInput" onChange= {myFunction} placeholder="Search for names" title="Type in a name"></input>
      </div>
      
      
      <TableRows filter={filter}/>
      <Footer></Footer>

    </>
  );
}

function TableRows({filter}) {
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
      <table class="blueTable" id="myTable">
      <thead>
          <tr>
            <th>Company Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead> 
      {Data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item, key)=> (
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