import React, { useState, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";

// AuthRoute
function AuthRoute({user, children}) {

    if(user){
        return <Navigate to="/" />
      }
  return children
}

export default AuthRoute;

//for log-in route