import Employee from "./Employee";

const Emp = ({ emps }) => {
  return (
    <div className="container">
      {emps.map((emp) => (
        <Employee
          key={`${emp.empName}-${emp.empDate}`}
          empName={emp.empName}
          empDate={emp.empDate}
          
          handleDeleteClick={(event) => {
            console.log(event);
            console.log(emp.empName, emp.empDate);
          }}
        ></Employee>
      ))}
    </div>
  );
};

export default Emp;
