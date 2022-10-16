import React from "react";
import {Link} from 'react-router-dom'
import WithAlert from "./WithAlert";
import WithUser from "./WithUser";
// import Button from './Button'

// Accounts Page
function Accounts({user, setUser, setAlert, setCart,}) {

  const handleLogOut = () => {
    localStorage.removeItem("token")
    setUser(undefined);
    // setCart(delete "cart");
    setAlert({type:"success", message:"Logged Out"})
  }

  return (
    
    <div>
        {user &&<h1 className="text-2xl text-rose-600 text-center">Hey... {user.full_name} 🙂</h1> }

        <div className="border-white my-4 mx-8 border-t-2"></div>

        <div className="flex justify-end m-4">
          <Link className="bg-rose-400 px-2 py-1 rounded border-2 font-Qwitcher text-2xl border-orange-500 hover:bg-red-600 " to="/" onClick={handleLogOut}>LogOut</Link>
        </div>

        
    </div>
  )
}

export default WithAlert(WithUser(Accounts));
