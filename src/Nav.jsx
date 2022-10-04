import React from 'react';
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'
import { CgChevronDown } from "react-icons/cg";
import "./Nav.css"



function Nav({ productCount, user }) {

  console.log(user)
  return (
    <div className="py-2 md:w-auto w-full flex justify-between items-center bg-orange-200/75">
      <div>
        <Link to="/"><img src="/imgs/weSHOP-removebg-preview.png" className="md:w-40 w-32 " /></Link>
      </div>


      <div className='flex space-x-4 items-center'>
        
        <div className='md:flex grid items-center space-x-2 md:mr-10 mr-4'>
          { user && <h1 className='text-red-400 font-mono md:text-xl text-base flex'>Welcome<span className='md:flex hidden md:ml-2 text-sky-500'> , {user.full_name} 🙂</span></h1> || <h1 className='text-red-400 font-mono text-xl'>Hello..!</h1>}
          <div className="dropdown">
            <button className="dropbtn"><CgChevronDown className="text-red-400"/></button>
            <div className="dropdown-content">
              { !user && <div>
                <Link className='btns' to="/log-in">Log-In</Link>
                <Link className='btns' to="/sign-Up">Sign-Up</Link> 
                </div>
                || 
                <Link className='btns' to="/accounts">Accounts</Link>
              
              }
            </div>
          </div>
        </div>
        
        {/* <Link to='log-in'> <VscAccount className='text-4xl text-red-400'/> </Link> */}
        <Link to="/Cart" className='flex relative items-center justify-center'>
          <div className="text-5xl m-2 text-red-400"> <FaOpencart /> </div>
          <span className='text-red-400 text-lg p-2 rounded-full absolute'>{productCount}</span>
        </Link>
      </div>

    </div>
  );
}

export default Nav;