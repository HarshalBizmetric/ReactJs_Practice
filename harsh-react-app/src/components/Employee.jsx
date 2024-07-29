function Employee({ empName, empDate, isHighlighted, handleDeleteClick }) {
  //Function for handling the event of delete button clicked
  // const handleDeleteClicked = (event) =>{
  //     console.log(event);
  //     console.log(empName, empDate);
  // }


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
            onClick={handleDeleteClick}
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
