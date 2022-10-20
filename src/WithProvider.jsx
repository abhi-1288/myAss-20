import { AlertContext, UserContext, CartContext } from "./Contexts"
import React from "react";

const WithProvider = (providerName) => (IncomingComponent) =>  (props) => {
    const contextData = React.useContext(providerName )
    return (<IncomingComponent { ...props } {...contextData} />)
        
}

//HOCs
// export default WithProvider(AlertContext)

export const WithAlert = WithProvider(AlertContext)
export const WithUser = WithProvider(UserContext)
export const WithCart = WithProvider(CartContext)