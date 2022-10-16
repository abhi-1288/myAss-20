import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'



function Footer() {
  return(
    <div className="bg-gray-900 rounded-t-md border-t-2 border-white dark:bg-slate-800">
    <div className="flex md:flex-row flex-col md:justify-center ">

      <div className="m-6">
          <img src="/imgs/weSHOP-removebg-preview.png" className="md:w-42 w-36 mx-auto" />
        <h2 className="font-Caveat text-red-400 text-4xl italic text-center">weShop Store </h2>
        <div className="flex space-x-4 justify-center mt-4">
          <img className="hover:bg-red-400 hover:rounded-lg" src="https://img.icons8.com/ios-filled/28/FFFFFF/instagram-new.png"/>
          <img className="hover:bg-red-400 hover:rounded-lg" src="https://img.icons8.com/ios-filled/28/FFFFFF/twitter--v1.png"/>
          <img className="hover:bg-red-400 hover:rounded-lg" src="https://img.icons8.com/ios-filled/28/FFFFFF/linkedin-2--v1.png"/>
          <img className="hover:bg-red-400 hover:rounded-lg" src="https://img.icons8.com/ios-filled/28/FFFFFF/facebook-f.png"/>
        </div>
      </div>

      <div className="m-6 text-center">
        <h2 className="text-3xl font-sans font-semibold text-gray-50">Quick Links</h2>
        <div className="flex flex-col space-y-2 my-2 ">
          <Link className="font-sans text-xl text-white hover:text-red-400  hover:font-bold hover:italic" to="/">Visit Store</Link>
          <Link className="font-sans text-xl text-white hover:text-red-400  hover:font-bold hover:italic" to="">Contact Us</Link>
        </div>
      </div>

      <div className="m-6 text-center">
        <h2 className="text-3xl font-serif font-semibold text-gray-50">Important Links</h2>
        <div className='grid space-y-2 my-2'>
          <a className="font-serif text-xl hover:italic hover:text-red-400 text-white hover:font-bold" href="https://codeyogi.io/">CodeYogi</a>
          <Link className="font-serif text-xl hover:italic hover:text-red-400 text-white hover:font-bold" to="tandc">Terms and Conditions</Link>
        </div>
      </div>

    </div>
    
      <div className="border-t-2 border-white items-center flex md:flex-row flex-col "></div>

       <div className="p-2 text-white text-center flex md:justify-between md:flex-row flex-col mx-9 ">
         <p className="font-mono italic text-lg flex items-center"> <AiOutlineCopyrightCircle className='text-lg mx-2'/> COPYRIGHT 2022|weSHOP</p>
         <div className="flex items-center">
           <img src="https://app.codeyogi.io/assets/favicon-96.d8dad325.png" className="rounded-md w-10 h-10 mx-1"/>
           <p className="font-mono italic text-lg">Powered by <span className="italic text-lg font-semibold gont-serif">CODEYOGI</span></p>
         </div>
       </div>

    </div>
  )
}

export default Footer;