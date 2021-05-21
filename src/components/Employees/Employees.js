import { useState,useContext, useEffect } from 'react'
import SingleEmployee from "./SingleEmployee";
import {EmployeesContext} from '../../contexts/EmployeesContext'
import { Modal, Button } from 'react-bootstrap'
import AddForm from '../Forms/AddForm'




const Employees = () => {

    const { employees } = useContext(EmployeesContext) //Direk kendisinin Kullanacağı contexti belirtiyoruz.

    const [show, setShow] = useState(false)


    const modalClose = () => setShow(false)
    const modalShow = () => setShow(true)


    useEffect(() => {

        modalClose()
    }, [employees]) //employees 'deki bir değişklik te modalClose() çalışsın.



    return (
        <>
            <div className="table-title ">
                <div className="row">
                <div className="col-sm-9">
                    
                    <h2>
                    <i className="fa fa-users mr-1" aria-hidden="true"></i>  Manage <b>Employees</b>
                    </h2>

                    
                </div>
                <div className="col-sm-3">
                    <Button onClick={modalShow}  className=" p-2" variant="success" data-toggle="modal" >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Employee</span>
                    </Button>
                    
                </div>
                </div>
            </div>

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

            <Modal show={show}  onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Employee Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm/>
                </Modal.Body>

                
            </Modal>

           
        </>
    );
};

    export default Employees;
