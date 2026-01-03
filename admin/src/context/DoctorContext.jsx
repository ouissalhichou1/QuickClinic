import { createContext } from "react";

export const DoctorContext = createContext()

const DoctorContextprovider = (props) => {

    const value = {

    }

    return(
        <DoctorContextprovider value={value}>
            {props.children}
        </DoctorContextprovider>
    )
}

export default DoctorContext