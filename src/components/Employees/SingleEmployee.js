

const SingleEmployee = ({employees}) => {

   let count =0

    return(
        <>
            {
                employees.map((emp) => (
                    <tr key={emp.id}>
                
                        <td><span className="text-danger">{count += 1} ) </span> {emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.address}</td>
                        <td>{emp.phone}</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>

                ))


            }
        </>
    )

}

export default SingleEmployee