import AppName from "./components/AppName";
import AddEmp from "./components/AddEmp";
import Employee from "./components/Employee";
import './EmployeeList.css';
import Employee2 from "./components/Employee2";

function EmpList() {
    return <center className='todo-container'>

        <AppName></AppName>
        <AddEmp></AddEmp>

        <div className='emplist'>
        <Employee></Employee>
        <Employee2></Employee2>
        </div>
        
    </center>
}

export default EmpList;