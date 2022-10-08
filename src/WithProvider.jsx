import { AlertContext, UserContext } from "./Contexts"
import React from "react";

const WithProvider = (providerName) =>{
    const MYHOC = (IncomingComponent) => {
        const OutgoingComponent = (props) => {
            const contextData = React.useContext(providerName )
            return (<IncomingComponent { ...props } {...contextData} />)
        }
        return OutgoingComponent
    }
    return MYHOC
}


// export default WithProvider(AlertContext)

export const WithAlert = WithProvider(AlertContext)
export const WithUser = WithProvider(UserContext)