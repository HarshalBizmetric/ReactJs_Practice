function Employee({empName, empDate}){

    return (<div className="container">
    <div className="row kg-row">
        <div className="col-4">
            {empName}
        </div>

        <div className="col-3">
            {empDate}
        </div>
        <div className="col-3">
        <button type="button" className="btn btn-danger kg-button">delete</button>
        </div>
    </div>
    <br />
</div>)
}

export default Employee;