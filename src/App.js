import Employees from "./components/Employees/Employees";
import './index.css'


function App() {
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                
                 
                  <h2>
                  <i className="fa fa-users mr-1" aria-hidden="true"></i>  Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Employee</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i> <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>

            <Employees />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
