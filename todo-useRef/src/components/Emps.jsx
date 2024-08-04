import Employee from "./Employee";

const Emp = ({ emps, handleDeleteEmp }) => {
  return (
    <div className="container">
      {emps.map((emp) => (
        <Employee
          key={`${emp.empName}-${emp.empDate}`}
          empName={emp.empName}
          empDate={emp.empDate}
          
          // handleDeleteEmp={(event) => {
          //   console.log(event);
          //   console.log(emp.empName, emp.empDate);
          // }}

          handleDeleteEmp={handleDeleteEmp}
        ></Employee>
      ))}
    </div>
  );
};

export default Emp;
