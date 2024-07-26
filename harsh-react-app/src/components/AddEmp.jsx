function AddEmp() {
    return (
        <div className="container text-center">
            <div class="row kg-row">
                <div class="col-4">
                    <input type="text" placeholder="Enter employee name" />
                </div>

                <div class="col-3">
                    <input type="date" />
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-success kg-button">Add Emp</button>
                </div>
            </div>
            <br />
        </div>)
}

export default AddEmp;