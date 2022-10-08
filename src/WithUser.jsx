import { UserContext } from "./Contexts";
import React from "react";

const WithUser = (IncomingComponent) => {
    const OutgoingComponent = (props) => {
        const contextData = React.useContext(UserContext)
        return (<IncomingComponent { ...props } {...contextData} />)
    }
    return OutgoingComponent
}

export default WithUser