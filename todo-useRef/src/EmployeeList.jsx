import AppName from "./components/AppName";
import AddEmp from "./components/AddEmp";
import Emps from "./components/Emps";
import EmptyList from "./EmptyList";

//import Employee1 from "./components/Employee1";
//import Employee2 from "./components/Employee2";
//import Employee from "./components/Employee";
import "./EmployeeList.css";
import { useState } from "react";

function EmpList() {

//Using of useState hook to manage the state of the component
//let [currentValue, changeValue] = useState("Changes will reflect here");
let textStateArr = useState("Jay shree Ram"); //default Value => "Jay shree Ram"
let textValue = textStateArr[0];
let setTextValue = textStateArr[1];

//other way to write above code
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

let [empValue, setEmpValue] = useState(defaultData);

//Add Employee handler function
const handleAddEmp = (employeeName, employeeDate) => {
  const newValues = {empName: employeeName, empDate: employeeDate};
  
  //Simple Update 
  // const newEmployees = [...empValue, newValues];
  // setEmpValue(newEmployees);

  //functional update
  setEmpValue((currEmps) =>{
    const newEmployees = [...currEmps, newValues];
    return newEmployees;
  });

  console.log(empValue);
}

//Delete Employee handler Function
const handleDeleteEmp = (itemName) => {
  const newEmpList = empValue.filter(item => item.empName !== itemName);
  setEmpValue(newEmpList);
};


return (
    <center className="todo-container">
      <AppName></AppName>

      <AddEmp handleAddEmp = {handleAddEmp}></AddEmp>
      {empValue.length === 0 ? <EmptyList></EmptyList> : ""}
      
      <Emps emps={empValue} handleDeleteEmp={handleDeleteEmp} ></Emps>
    </center>
  );
}

export default EmpList;