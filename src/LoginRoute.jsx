import React, { useState, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";

// LoginRoute
function LoginRoute({user, children}) {

    if(!user){
        return <Navigate to="/log-In" />
      }
  return children
}

export default LoginRoute;

//for index route
