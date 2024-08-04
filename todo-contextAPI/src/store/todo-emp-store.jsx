import { createContext} from "react";


export const TodoEmpContext = createContext({
    employees: [],
    addNewEmployee: () => {},
    deleteEmployee: () => {},
  });