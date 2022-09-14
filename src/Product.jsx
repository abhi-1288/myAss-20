import React from 'react';
import { Link } from "react-router-dom";

let path = window.location.pathname

  console.log( 'path is', path)


function Product({thumbnail, category, title, price, id, }) {

  return (

    <div className="text-center hover:border-y hover:border-x hover:rounded hover:border-red-400  md:m-4 m-3 w-52 ">
      
      <div className="w-50 h-48">
        <img src={thumbnail} className="w-full h-full object-cover " />
      </div>
      <p className="text-gray-400 text-sm">{category}</p>
      <h3 className="text-black font-mono text-lg">{title}</h3>
      <h5 className="text-orange-600 font-sans text-md mb-2">₹ {price}</h5>
      <Link className="bg-sky-500 p-2 text-2xl font-black font-Qwitcher rounded-md  hover:bg-rose-300" to={"/products/" + id} >SHOW</Link>

      
    </div>

    

  );
}

export default Product;