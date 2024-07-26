import AppName from "./components/AppName";
import AddEmp from "./components/AddEmp";
import Emps from "./components/Emps";

//import Employee1 from "./components/Employee1";
//import Employee2 from "./components/Employee2";
//import Employee from "./components/Employee";
import './EmployeeList.css';
function EmpList() {

    const empData = [
        {
            empName: "Yash Agrawal",
            empDate: "01/02/2023"
        },
        {
            empName: "Vinayak Deshpande",
            empDate: "01/02/2012"
        },
        {
            empName: "Harshal Deshmukh",
            empDate: "01/02/2024"
        }
    ];

    return <center className='todo-container'>

        <AppName></AppName>
        <AddEmp></AddEmp>
        <Emps emps={empData}></Emps>

        {/* <div className='emplist'>
        <Employee empName="Yash Agrawal" empDate="01/02/2023"></Employee>
        <Employee empName="Vinayak Deshpande" empDate="01/02/2012"></Employee>
        <Employee empName='Harshal Deshmukh' empDate='01/01/2024'></Employee>
        
        <Employee1></Employee1>
        <Employee2></Employee2>
        </div> */}
        
    </center>
}

export default EmpList;