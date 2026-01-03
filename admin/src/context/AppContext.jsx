import { createContext } from "react";

export const AppContext = createContext()

const AppContextprovider = (props) => {

    const value = {

    }

    return(
        <AppContextprovider value={value}>
            {props.children}
        </AppContextprovider>
    )
}

export default AppContext