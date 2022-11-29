import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import headerImage from "./images/extch.png";
import logo from "./images/extech-logo.png";
import icon from "./images/job-search.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Header() {
  return (
    <>
      <img class='img' src={headerImage} alt="ExTech logo"></img>
      <div>
        <h1>Exemplify tech. Job searching. Simplified.</h1>
        <h3>With the company roles, dates, and apply links, <br></br> we strive to simplify the job searching & filtering process, catered towards your needs.</h3>
      </div>
    </>
  );
}


function Body() {
  return (
    // create search bar 


    

    // create table
    // want to connect this with the backend webscraping of linkedin 
    
    <table class="blueTable">
    <thead>
    <tr>
    <th>head1</th>
    <th>head2</th>
    <th>head3</th>
    <th>head4</th>
    </tr>
    </thead>
    <tfoot>
    <tr>
    <td colspan="4">
    <div class="links"><a href="#">&laquo;</a> <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
    </td>
    </tr>
    </tfoot>
    <tbody>
    <tr>
    <td>cell1_1</td>
    <td>cell2_1</td>
    <td>cell3_1</td>
    <td>cell4_1</td>
    </tr>
    <tr>
    <td>cell1_2</td>
    <td>cell2_2</td>
    <td>cell3_2</td>
    <td>cell4_2</td>
    </tr>
    <tr>
    <td>cell1_3</td>
    <td>cell2_3</td>
    <td>cell3_3</td>
    <td>cell4_3</td>
    </tr>
    <tr>
    <td>cell1_4</td>
    <td>cell2_4</td>
    <td>cell3_4</td>
    <td>cell4_4</td>
    </tr>
    </tbody>
    </table>
  );
}

function Footer() {
  return (
    <>

    </>
  );
}
