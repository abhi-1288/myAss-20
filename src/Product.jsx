import React from 'react';
import { Link } from "react-router-dom";

let path = window.location.pathname

console.log('path is', path)


function Product({ thumbnail, category, title, price, id}) {

  return (

    <div className="text-center dark:shadow-white shadow-neonPurple dark:shadow shadow-2xl p-px hover:border-y hover:border-x hover:rounded hover:border-red-400  md:m-4 m-3 w-60 h-auto  ">
      <Link to={"/products/" + id} >
        <div key={id} className="w-50 h-48">
          <img src={thumbnail} className="w-full h-full rounded-t object-cover " />
        </div>
        <p className="text-slate-400 font-mono text-sm">{category}</p>
        <h3 className="dark:text-white text-black font-mono text-lg mx-px">{title}</h3>
        <h5 className="text-orange-600 font-sans text-md">₹ {price}</h5>
      </Link>
    </div>



  );
}

export default Product;