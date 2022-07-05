import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Getstudents.css";
import axios from 'axios'

function GetStudentsDetails() {

    const [details,setgetDetails] = useState([])

    const getTheDetails = (e) => {
        e.preventDefault()
        axios.get("http://localhost:8000/first_app/students/")
        .then((res) => {
            console.log(res)
            setgetDetails(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }


  return (
    <div className="myTable">
      <h1>Get The Student Details</h1>
      <button onClick={getTheDetails}>Get Details</button>

      <div style={{ padding: "30px" }}>
      {details.length > 0 ? <table style={{ marginTop: "30px", width: "100%" }}>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      {details?.map((det) => {
        return <tr>
          <td>{det.first_name}</td>
          <td>{det.last_name}</td>
          <td>{det.age}</td>
        </tr>
      })}
    </table> : null}
        
      </div>
    </div>
  );
}

export default GetStudentsDetails;
