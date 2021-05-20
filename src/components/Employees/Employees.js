import SingleEmployee from "./SingleEmployee";
import { useContext } from 'react'
import {EmployeesContext} from '../../contexts/EmployeesContext'



const Employees = () => {

  const { employees } = useContext(EmployeesContext) //Direk kendisinin Kullanacağı contexti belirtiyoruz.


    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <SingleEmployee employees={employees} /> 
            </tbody>
        </table>
    );
};

    export default Employees;
