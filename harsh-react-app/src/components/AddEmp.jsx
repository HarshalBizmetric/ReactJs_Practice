function AddEmp({ handleAddEmp }) {
  //Function for handling the event of changing the input of add emp
  // const handleOnChange = (event) => {
  //     console.log(event.target.value);
  // }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            id="empNameInput"
            placeholder="Enter employee name"
            //Passing handler function
            // onChange={handleOnChange}
            onKeyDown={handleAddEmp}
          />
        </div>

        <div className="col-3">
          <input type="date" id="empDateInput" 
            onKeyDown={handleAddEmp}
            />
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddEmp}
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
