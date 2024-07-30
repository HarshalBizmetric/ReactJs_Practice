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
  // const empData = [
  //   {
  //     empName: "Yash Agrawal",
  //     empDate: "01/02/2023",
  //   },
  //   {
  //     empName: "Vinayak Deshpande",
  //     empDate: "01/02/2012",
  //   },
  //   {
  //     empName: "Harshal Deshmukh",
  //     empDate: "01/02/2024",
  //   },
  // ];


//Using of useState hook to manage the state of the component
//let [currentValue, changeValue] = useState("Changes will reflect here");
let textStateArr = useState("Jay shree Ram"); //default Value => "Jay shree Ram"
let textValue = textStateArr[0];
let setTextValue = textStateArr[1];

//other way to write above code
// let [textValue, setTextValue]  = useState("Jay shree ram");


let [empValue, setEmpValue] = useState([
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
]);

//Function for handling the event of changing the input of add emp
// const handleOnChange = (event) => {
//     console.log(event.target.value);
//     setTextValue(event.target.value);
//   };

//Add Employee handler function
const handleAddEmp = (event) => {
  if(event.key === 'Enter' || event.type === 'click'){
    const empName = document.getElementById('empNameInput').value;
    const empDate = document.getElementById('empDateInput').value;


    let newEmp = { empName, empDate};
    
    let newEmpValues = [...empValue, newEmp];
    setEmpValue(newEmpValues);

    document.getElementById('empNameInput').value = '';
    document.getElementById('empDateInput').value = '';
    
    console.log(newEmpValues);
  }
}

//Delete Employee handler Function
const handleDeleteEmp = (itemName) => {
  const newEmpList = empValue.filter(item => item.empName !== itemName);
  setEmpValue(newEmpList);
};


return (
    <center className="todo-container">
      <AppName></AppName>
      {/* Passing handler function */}
      <AddEmp handleAddEmp = {handleAddEmp}></AddEmp>
      {empValue.length === 0 ? <EmptyList></EmptyList> : ""}
      
      <Emps emps={empValue} handleDeleteEmp={handleDeleteEmp} ></Emps>

      {/* <div className='emplist'>
        <Employee empName="Yash Agrawal" empDate="01/02/2023"></Employee>
        <Employee empName="Vinayak Deshpande" empDate="01/02/2012"></Employee>
        <Employee empName='Harshal Deshmukh' empDate='01/01/2024'></Employee>
        
        <Employee1></Employee1>
        <Employee2></Employee2>
        </div> */}
    </center>
  );
}

export default EmpList;