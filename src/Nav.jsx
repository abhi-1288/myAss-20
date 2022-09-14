import React from 'react';
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'



function Nav({ productCount }) {

  return (
    <div className="py-2 md:w-auto w-full flex justify-between items-center bg-orange-200/75">
      <div>
        <Link to="/"><img src="https://cdn.discordapp.com/attachments/998621481934270566/1015538353275420732/weSHOP-removebg-preview.png" className="md:w-40 w-32" /></Link>
      </div>

      <Link to="/Cart">
        <div className="text-5xl m-2 text-red-400"> <FaOpencart /> </div>
        <span className='text-red-400 text-lg p-2 rounded-full '>{productCount}</span>
      </Link>

    </div>
  );
}

export default Nav;