import { useContext } from "react";
import { TodoEmpContext } from "../store/todo-emp-store";
import Employee from "./Employee";

const Emp = () => {
  
  //Data Coming from context provider
  // const contextObject = useContext(TodoEmpContext);
  // const employees = contextObject.employees;
  
  //Destructured above code
  const {employees} = useContext(TodoEmpContext);


  return (
    <div className="container">
      {employees.map((emp) => (
        <Employee
          key={`${emp.empName}-${emp.empDate}`}
          empName={emp.empName}
          empDate={emp.empDate}
        ></Employee>
      ))}
    </div>
  );
};

export default Emp;
