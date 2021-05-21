import Employees from "./components/Employees/Employees";
import './index.css'
import EmployeesContextProvider from './contexts/EmployeesContext'

function App() {
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
         
            <EmployeesContextProvider>
                <Employees />
            </EmployeesContextProvider>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
