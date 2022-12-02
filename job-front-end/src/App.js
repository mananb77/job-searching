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
      <div class="chow">
        <input type="text" id="myInput" onChange= {myFunction()} placeholder="Search for names" value={search.input} title="Type in a name"></input>
      </div>
      
      <TableRows/>
      <Footer></Footer>

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
    );
  }
  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    if (!(input == null)) {
      filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
    }
      }       
    }
  }


export default App;