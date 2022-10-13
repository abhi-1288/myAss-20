import React, { useState } from "react";
import { AlertContext } from "../Contexts";

// AlertProvider component
function AlertProvider( {children} ) {

    const [alert, setAlert] = useState();

  
  const removeAlert = () => {
    setAlert(undefined)
    console.log("alert removed")
  }

  return (
    <AlertContext.Provider value={{alert, setAlert, removeAlert}}> { children } </AlertContext.Provider>
  )
}

export default AlertProvider;
