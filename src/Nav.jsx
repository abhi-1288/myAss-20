import React from 'react';
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'



function Nav({ productCount }) {

  return (
    <div className="py-2 md:w-auto w-full flex justify-between items-center bg-orange-200/75">
      <div>
        <Link to="/"><img src="/imgs/weSHOP-removebg-preview.png" className="md:w-40 w-32 " /></Link>
      </div>


      <div className='flex space-x-4 items-center'>
        <Link to='log-in'> <VscAccount className='text-4xl text-red-400'/> </Link>
        <Link to="/Cart" className='flex relative items-center justify-center'>
          <div className="text-5xl m-2 text-red-400"> <FaOpencart /> </div>
          <span className='text-red-400 text-lg p-2 rounded-full absolute'>{productCount}</span>
        </Link>
      </div>

    </div>
  );
}

export default Nav;