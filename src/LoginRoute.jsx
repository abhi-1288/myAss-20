import React from "react";
import { Navigate}from "react-router-dom";
import WithUser from "./WithUser";

// LoginRoute
function LoginRoute({user, children}) {

    if(!user){
        // return <Navigate to="/log-In" />
      }
  return children
}

export default WithUser(LoginRoute);

//for index route
