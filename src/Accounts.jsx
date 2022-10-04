import React, { useState, useEffect } from "react";
import {Navigate} from 'react-router-dom'
import Button from './Button'

// Accounts Page
function Accounts({user, setUser}) {

  const handleLogOut = () => {
    localStorage.removeItem("token")
    setUser(undefined)
    return <Navigate to="/log-In" />
    
  }

  return (
    
    <div>
        {user &&<h1 className="text-2xl text-rose-600 text-center">Hey... {user.full_name} 🙂</h1> }
        <div className="flex justify-end m-4">
          <Button onClick={handleLogOut}>LogOut</Button>
        </div>
        
    </div>
  )
}

export default Accounts;
