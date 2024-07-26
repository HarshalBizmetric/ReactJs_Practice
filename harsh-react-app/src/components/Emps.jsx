import Employee from "./Employee";

const Emp =({emps}) => {
    return (
        
        <div className="container">
        
        {emps.map(emp => <Employee key={emp.empName} empName={emp.empName} empDate={emp.empDate}></Employee>)}
        
        </div>
    );
};

export default Emp;