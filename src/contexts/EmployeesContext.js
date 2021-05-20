import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const EmployeesContext =  createContext();


const EmployeesContextProvider = (props) => {

    const [employees] = useState([
        {
            id: uuidv4(),
            name: "Greta Ramos",
            email: "gretaramos@comtours.com",
            phone: "+1 (964) 415-2986",
            address: "910 Kansas Place, Orick, North Dakota",
        },
        {
            id: uuidv4(),
            name: "Cotton Taylor",
            email: "cottontaylor@comtours.com",
            phone: "+1 (932) 446-3918",
            address: "694 Maujer Street, Caledonia, Massachusetts",
        },
        {
            id: uuidv4(),
            name: "Bowers Cooper",
            email: "bowerscooper@comtours.com",
            phone: "+1 (843) 598-3955",
            address: "814 Estate Road, Cotopaxi, Federated States Of Micronesia",
        },
        {
            id: uuidv4(),
            name: "Patti Alvarado",
            email: "pattialvarado@comtours.com",
            phone: "+1 (842) 412-3690",
            address: "954 Colin Place, Brady, Montana",
        },
        {
            id: uuidv4(),
            name: "Sheppard Clarke",
            email: "sheppardclarke@comtours.com",
            phone: "+1 (839) 586-3355",
            address: "851 Bristol Street, Cade, Illinois",
        },
        {
            id: uuidv4(),
            name: "Tonia Sherman",
            email: "toniasherman@comtours.com",
            phone: "+1 (834) 600-2831",
            address: "588 Schroeders Avenue, Clarksburg, Tennessee",
        },
        {
            id: uuidv4(),
            name: "Bond Hampton",
            email: "bondhampton@comtours.com",
            phone: "+1 (952) 561-3318",
            address: "878 Prospect Street, Reinerton, South Dakota",
        },
    ]);

    return(

        <EmployeesContext.Provider value={{employees}}>
                {props.children}
        </EmployeesContext.Provider>
    )

}


export default EmployeesContextProvider