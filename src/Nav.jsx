import React from 'react';
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { CgChevronDown } from "react-icons/cg";
import "./Nav.css"
import WithUser from './WithUser';
import { WithCart } from './WithProvider';



function Nav({user, cartCount}) {

  console.log(user)
  return (
    <div className="py-2 md:w-auto w-full flex justify-between items-center dark:bg-red-200 rounded-b-md bg-orange-200/75">
      <div>
        <Link to="/"><img src="/imgs/weSHOP-removebg-preview.png" className="md:w-40 w-32 " /></Link>
      </div>


      <div className='flex space-x-4 items-center'>
        
        <div className='md:flex grid items-center space-x-2 md:mr-10 mr-4'>
          { user && <h1 className='text-red-500 font-mono md:text-xl text-base flex'>Welcome<span className='md:flex hidden md:ml-2 text-sky-500'> {user.full_name} 🙂</span></h1> || <h1 className='text-red-700 font-mono text-xl animate-pulse'>Hello..!</h1>}
          <div className="dropdown ">
            { user && <button className="dropbtn"><CgChevronDown className="text-red-400"/></button> || 
            <button className="dropbtn"><CgChevronDown className="text-red-700 animate-pulse"/></button>}
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
        {
          // user &&
        <Link to="/Cart" className='flex relative items-center justify-center'>
          <div className="text-5xl m-2 text-red-400"> <FaOpencart /> </div>
          <span className='text-red-400 text-lg p-2 rounded-full absolute'>{cartCount}</span>
        </Link>
        // || <div className='w-20'></div>
        }

      </div>

    </div>
  );
}

export default WithUser(WithCart(Nav));