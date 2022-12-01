import React from "react";
import SearchBar from "./SearchBar.js";
//npm i -S bootstrap
// yarn add bootstrap
//comment
// Connect the back end to front end
// const Table = ({}) => {
// return (
// <div>
// <center>
// <table class="blueTable">
// <thead>
// <tr>
// <th>Company Name</th>
// <th>Job Title</th>
// <th>Location</th>
// <th>Link</th>
// </tr>
// </thead>
// <tfoot>
// <tr>
// <td colspan="3">
// <div class="links">
// <a href="#">&laquo;</a>{" "}
// <a class="active" href="#">
// 1
// </a>{" "}
// <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
// <a href="#">&raquo;</a>
// </div>
// </td>
// </tr>
// </tfoot>
// <tbody>
// <tr>
// <td>cell1_1</td>
// <td>cell2_1</td>
// <td>cell3_1</td>
// <td>cell4_1</td>
// </tr>

// <tr>
// <td>cell1_2</td>
// <td>cell2_2</td>
// <td>cell3_2</td>
// <td>cell4_2</td>
// </tr>
// <tr>
// <td>cell1_3</td>
// <td>cell2_3</td>
// <td>cell3_3</td>
// <td>cell4_3</td>
// </tr>
// <tr>
// <td>cell1_4</td>
// <td>cell2_4</td>
// <td>cell3_4</td>
// <td>cell4_4</td>
// </tr>
// </tbody>
// </table>
// </center>
// <div>
// <br></br>
// </div>
// </div>
// )
// }

export const tableConstants = (handleEdit) => {
  return [
    {
      title: "Company Name",
      render: (rowData) => {
        return <span>{rowData.companyname}</span>;
      },
    },
    {
      title: "Job Title",
      render: (rowData) => {
        return <span>{rowData.jobtitle}</span>;
      },
    },
    {
      title: "Location",
      render: (rowData) => {
        return <span>{rowData.location}</span>;
      },
    },
    {
      title: "Link",
      render: (rowData) => {
        return <span>{rowData.link}</span>;
      },
    },
  ];
};

export default Table;
