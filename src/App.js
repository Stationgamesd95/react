import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Management</Title>
          <EmployeeRow
            id={employee.id}
            key={employee.id}
            firstname={employee.firstname}
            lastname={employee.lastname}
            email={employee.email}
            phone={employee.phone}
            age={employee.age}
          />
      </Wrapper>
    );
  }
}

export default App;
