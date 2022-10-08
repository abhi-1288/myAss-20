import { AlertContext } from "./Contexts"
import React from "react";

const WithAlert = (IncomingComponent) => {
    const OutgoingComponent = (props) => {
        const contextData = React.useContext(AlertContext)
        return (<IncomingComponent { ...props } {...contextData} />)
    }
    return OutgoingComponent
}

export default WithAlert