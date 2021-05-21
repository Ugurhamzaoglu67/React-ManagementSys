import { Form, Button } from 'react-bootstrap'
import { EmployeesContext } from '../../contexts/EmployeesContext'
import { useContext, useState } from 'react'

const AddForm = () => {

    const { addNewEmp } = useContext( EmployeesContext )

    //Her bir FORM elemanını ayrı bir state olarak düşünüyoruz.
/*      1. METHOD
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("") */

    // 2. METHOD
    const [newEmp, setNewEmp] = useState({
            name:"",
            email:"",
            address:"",
            phone:""
    })


    const {name,email,address,phone} = newEmp

    const onInputChange = (e) => {

        setNewEmp({...newEmp, [e.target.name] : e.target.value })

    } 


    const formSubmitHandle = (e) => {
        e.preventDefault();

        addNewEmp(name, email, address, phone)
       
    }

    return ( 
        <Form onSubmit={formSubmitHandle}>

            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Name"
                    required 
                    name='name'
                    value={name}
                    onChange={e => onInputChange(e)}  
                />                    
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Email"
                    required     
                    //value={email}
                   // onChange = {e => setEmail(e.target.value)}   
                   name='email'
                   value={email}
                   onChange={e => onInputChange(e)}  

                />                    
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    as="textarea"
                    placeholder="Your Address"
                    row={3}
                    //value={address}
                    //onChange={e => setAddress(e.target.value)}
                    name='address'
                   value={address}
                   onChange={e => onInputChange(e)}     

                />
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Your Phone"
                   // value={phone}
                   // onChange ={e => setPhone(e.target.value)}
                   name='phone'
                   value={phone}
                   onChange={e => onInputChange(e)}       
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                    Add Employee
            </Button>

        </Form>
    )
}


export  default AddForm