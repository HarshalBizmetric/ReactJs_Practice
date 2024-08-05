import AppName from "./components/AppName";
import AddEmp from "./components/AddEmp";
import Emps from "./components/Emps";
import EmptyList from "./EmptyList";

import "./EmployeeList.css";
import { useState } from "react";
import { TodoEmpContext } from "./store/todo-emp-store";

function EmpList() {
  //Using of useState hook to manage the state of the component
  //let [currentValue, changeValue] = useState("Changes will reflect here");

  // let [textValue, setTextValue]  = useState("Jay shree ram");

  const defaultData = [
    {
      empName: "Yash Agrawal",
      empDate: "01/02/2023",
    },
    {
      empName: "Vinayak Deshpande",
      empDate: "01/02/2012",
    },
    {
      empName: "Harshal Deshmukh",
      empDate: "01/02/2024",
    },
  ];

  let [employees, setEmpValue] = useState(defaultData);

  //Add Employee handler function
  const addNewEmployee = (employeeName, employeeDate) => {
    const newValues = { empName: employeeName, empDate: employeeDate };

    //Simple Update
    // const newEmployees = [...empValue, newValues];
    // setEmpValue(newEmployees);

    //functional update
    setEmpValue((currEmps) => {
      const newEmployees = [...currEmps, newValues];
      return newEmployees;
    });

    //console.log(employees);
  };

  //Delete Employee handler Function
  const deleteEmployee = (itemName) => {
    const newEmpList = employees.filter((item) => item.empName !== itemName);
    setEmpValue(newEmpList);
  };

  return (
    //Passing state data in context provider via value attribute and that data will be accessed by other componenents present in the context provider

    //Similarly we can make methods (like addNewEmployee, deleteEmployee) distributable to all components by passing them in provider

    // Here we are passing values as an object (we can pass reference, object, array)

    <TodoEmpContext.Provider
      value={{
        employees: employees,
        addNewEmployee: addNewEmployee,
        deleteEmployee: deleteEmployee,
      }}
    > 
      <center className="todo-container">
        <AppName></AppName>

        <AddEmp></AddEmp>
        {employees.length === 0 ? <EmptyList></EmptyList> : ""}

        <Emps></Emps>
      </center>
    </TodoEmpContext.Provider>
  );
}

export default EmpList;
