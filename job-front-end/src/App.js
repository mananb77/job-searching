import logo from "./images/job-search.png";
import "./App.css";
import headerImg from "./images/extch.png";
import SearchBar from "./components/SearchBar.js"

function App() {
  return (
    <>
      {/* Header */}
      <center>
        <img class="img" src={headerImg} alt="ExTech logo" width={300}></img>
      </center>
      <div class="header">
        <center>
          <h1>Exemplify tech. Job searching. Simplified.</h1>
        </center>
        <center>
          <h3>
            With the company roles, dates, and apply links, we strive to
            simplify
            <br></br> the job searching & filtering process, catered towards
            your needs.
          </h3>
          <p>The best tech job searching platform on the internet.</p>
        </center>
      </div>

      {/* Search Bar */}
      <SearchBar/>

      
      {/* Body Table */}/
      <center>
      <table class="blueTable">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Location</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="3">
              <div class="links">
                <a href="#">&laquo;</a>{" "}
                <a class="active" href="#">
                  1
                </a>{" "}
                <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
                <a href="#">&raquo;</a>
              </div>
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>cell1_1</td>
            <td>cell2_1</td>
            <td>cell3_1</td>
          </tr>
          <tr>
            <td>cell1_2</td>
            <td>cell2_2</td>
            <td>cell3_2</td>
          </tr>
          <tr>
            <td>cell1_3</td>
            <td>cell2_3</td>
            <td>cell3_3</td>
          </tr>
          <tr>
            <td>cell1_4</td>
            <td>cell2_4</td>
            <td>cell3_4</td>
          </tr>
        </tbody>
      </table>
      </center>
      <div>
        <br></br>
      </div>

      {/* Footer */}
      <div class='footer'></div>

    </>
  );
}



export default App;
