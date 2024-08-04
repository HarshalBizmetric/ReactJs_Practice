import { useContext } from "react";
import { TodoEmpContext } from "../store/todo-emp-store";

function Employee({ empName, empDate }) {
  
  const {deleteEmployee} = useContext(TodoEmpContext);

  return (
    <div className="container" >
      <div className="row kg-row">
        <div className="col-4">{empName}</div>

        <div className="col-3">{empDate}</div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-danger kg-button"
            //Passing handler function
            //onClick={(event) => handleDeleteClicked(event)}
            onClick={() => deleteEmployee(empName)}
          >
            delete
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Employee;
