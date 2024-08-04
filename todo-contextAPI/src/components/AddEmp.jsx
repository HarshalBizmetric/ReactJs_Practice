import { useState, useRef, useContext } from "react";
import { TodoEmpContext } from "../store/todo-emp-store";

function AddEmp() {

  //
  const {addNewEmployee} = useContext(TodoEmpContext);



  //useState() -->re-renders
  // const [empName, setempName] = useState();
  // const [empDate, setempDate] = useState();

  //Using useRef() --> No re-renders
  const empNameRef = useRef();
  const empDateRef = useRef();

  //handle changing name values
  // const handleNameChange = (event) => {
  //   setempName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  //handle changing date values
  // const handleDateChange = (event) => {
  //   setempDate(event.target.value);
  //   console.log(noOfUpdates.current);
  // };


  //handle method for when add button clicked
  const handleAddButtonClicked = () => {
    //calling parent method and passing current values
    
    //useRef impl
    const empName = empNameRef.current.value;
    const empDate = empDateRef.current.value;
    
    //Set name and date of input box to blank
    empNameRef.current.value = '';
    empDateRef.current.value = '';

    console.log(`Heyy ---->  ${empName} and ${empDate}`)

    addNewEmployee(empName, empDate);
    //Set name and date of input box to blank
    // document.getElementById('empNameInput').value = '';
    // document.getElementById('empDateInput').value = '';
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            id="empNameInput"
            ref={empNameRef}
            placeholder="Enter employee name"
            //onChange={handleNameChange}
          />
        </div>

        <div className="col-3">
          <input
            type="date"
            id="empDateInput"
            ref={empDateRef}
            //onChange={handleDateChange}
          />
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add Emp
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AddEmp;
