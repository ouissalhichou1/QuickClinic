import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextprovider = (props) => {

    const value = {

    }

    return(
        <AdminContextprovider value={value}>
            {props.children}
        </AdminContextprovider>
    )
}

export default AdminContext