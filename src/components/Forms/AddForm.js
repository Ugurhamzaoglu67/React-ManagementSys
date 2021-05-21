import { Form, Button } from 'react-bootstrap'


const AddForm = () => {

    return ( 

        <Form>

            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Name"
                    required        
                />                    
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Email"
                    required        
                />                    
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    as="textarea"
                    placeholder="Your Address"
                    row={3}

                />
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Your Phone"
                  
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                    Add Employee
            </Button>

        </Form>
    )
}


export  default AddForm