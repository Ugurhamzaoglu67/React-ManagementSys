import SingleEmployee from "./SingleEmployee";
import { useState } from "react";

const Employees = () => {

    const [employees, setEmployees] = useState([
        {
            id: "60a668cd66a4a0cdf8504456",
            name: "Greta Ramos",
            email: "gretaramos@comtours.com",
            phone: "+1 (964) 415-2986",
            address: "910 Kansas Place, Orick, North Dakota",
        },
        {
            id: "60a668cd0a2823357f45be92",
            name: "Cotton Taylor",
            email: "cottontaylor@comtours.com",
            phone: "+1 (932) 446-3918",
            address: "694 Maujer Street, Caledonia, Massachusetts",
        },
        {
            id: "60a668cd753eb89544b1edef",
            name: "Bowers Cooper",
            email: "bowerscooper@comtours.com",
            phone: "+1 (843) 598-3955",
            address: "814 Estate Road, Cotopaxi, Federated States Of Micronesia",
        },
        {
            id: "60a668cde2f7eb2e0405edb0",
            name: "Patti Alvarado",
            email: "pattialvarado@comtours.com",
            phone: "+1 (842) 412-3690",
            address: "954 Colin Place, Brady, Montana",
        },
        {
            id: "60a668cd8cd0484f0d666de4",
            name: "Sheppard Clarke",
            email: "sheppardclarke@comtours.com",
            phone: "+1 (839) 586-3355",
            address: "851 Bristol Street, Cade, Illinois",
        },
        {
            id: "60a668cdf537e316d9fc8cd2",
            name: "Tonia Sherman",
            email: "toniasherman@comtours.com",
            phone: "+1 (834) 600-2831",
            address: "588 Schroeders Avenue, Clarksburg, Tennessee",
        },
        {
            id: "60a668cd0fce123c575c1a15",
            name: "Bond Hampton",
            email: "bondhampton@comtours.com",
            phone: "+1 (952) 561-3318",
            address: "878 Prospect Street, Reinerton, South Dakota",
        },
    ]);

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
