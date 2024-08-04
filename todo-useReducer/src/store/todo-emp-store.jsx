import { createContext, useReducer } from "react";

export const TodoEmpContext = createContext({
  employees: [],
  addNewEmployee: () => {},
  deleteEmployee: () => {},
});


//pure function - Reducer --> returns updatated state
const empReducer = (currEmployees, action) => {
  let newEmployees = currEmployees;

  if (action.type === "ADD_EMPLOYEE") {
    newEmployees = [
      ...currEmployees,
      {
        empName: action.payload.empName,
        empDate: action.payload.empDate,
      },
    ];
  } else if (action.type === "DELETE_EMPLOYEE") {
    newEmployees = currEmployees.filter(
      (item) => item.empName !== action.payload.empName
    );
  }

  return newEmployees;
};


const TodoEmpsContextProvider = ({children}) => {
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

  //useReducer -------------------------------------------\

  const [employees, dispatchEmps] = useReducer(empReducer, defaultData);

  //Add Employee handler function
  const addNewEmployee = (empName, empDate) => {
    const newEmpAction = {
      type: "ADD_EMPLOYEE",
      payload: {
        empName,
        empDate,
      },
    };
    dispatchEmps(newEmpAction);
  };

  //Delete Employee handler Function
  const deleteEmployee = (empName) => {
    dispatchEmps({
      type: "DELETE_EMPLOYEE",
      payload: {
        empName,
      },
    });
  };

  return (
    <TodoEmpContext.Provider
      value={{
        employees: employees,
        addNewEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </TodoEmpContext.Provider>
  );
};

export default TodoEmpsContextProvider;
