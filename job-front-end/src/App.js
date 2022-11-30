import logo from "./images/job-search.png";
import "./App.css";
import headerImg from "./images/extch.png";
import SearchBar from "./components/SearchBar.js"

// This is the search bar functionality
// https://github.com/kbhavya1/reactjs-search-filter/blob/master/src/App.js

// class App extends Component {
//   render(){
//     const styleInfo = {
//       paddingRight:'10px'
//     }
//     const elementStyle ={
//       border:'solid',
//       borderRadius:'10px',
//       position:'relative',
//       left:'10vh',
//       height:'3vh',
//       width:'20vh',
//       marginTop:'5vh',
//       marginBottom:'10vh'
//     }
//     const items = Information.map(data=>{
//       return(
//       <div>
//         <ul>
//           <li style={{position:'relative',left:'10vh'}}>
//             <span style={styleInfo}>{data.name}</span>
//             <span style={styleInfo}>{data.age}</span>
//             <span style={styleInfo}>{data.country}</span>
//           </li>
//         </ul>
//       </div>
//       )
//     })
// }

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
