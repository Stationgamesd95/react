import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
        <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Greg</td>
        <td>Winston</td>
        <td>gregwinston@example.com</td>
        <td>32</td>
        <td>837-794-7494</td>
      </tr>
      <tr>
        <td>Tori</td>
        <td>Bradford</td>
        <td>toribradford@example.com</td>
        <td>26</td>
        <td>639-279-9274</td>
      </tr>
      <tr>
        <td>Luke</td>
        <td>Jefferson</td>
        <td>lukejefferson@example.com</td>
        <td>28</td>
        <td>920-246-2894</td>
      </tr>
    </table>
  );
}

export default EmployeeRow;
