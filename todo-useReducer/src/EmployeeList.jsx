import AppName from "./components/AppName";
import AddEmp from "./components/AddEmp";
import Emps from "./components/Emps";


import "./EmployeeList.css";
import TodoEmpsContextProvider from "./store/todo-emp-store";

function EmpList() {
  return (
    <TodoEmpsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        {/* <EmptyList></EmptyList> */}
        <EmpList></EmpList>
        <AddEmp></AddEmp>
        <Emps></Emps>
      </center>
    </TodoEmpsContextProvider>
  );
}

export default EmpList;
