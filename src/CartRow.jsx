import React, {useState, useEffect} from "react";
import {FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";

function CartRow({id, product, quantity, onQuantityChange, onRemove}){

   const handleChange = (event) => {
    onQuantityChange(product.id, +event.target.value );
   }

   const handleRemove = () => {
    onRemove(product.id);
   }
    
    return(
        <div>
            <div>
                
                <div className="flex md:flex-row md:w-auto w-40 flex-col justify-between items-center ">
                    <button className="flex">
                        <FaTimes className="text-red-400 hover:text-sky-500" onClick={handleRemove}/>
                    </button>

                    <div className="w-32 md:w-40 h-32 ">
                        <img src={product.thumbnail} className="w-full h-full mx-2" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-black font-mono text-lg">{product.title}</h3>
                        <h5  className="text-orange-600 font-sans text-md mb-2">₹ {product.price}</h5>
                    </div>
                    <input onChange={handleChange} id="val" type="number"  value={quantity} className="border-2 border-orange-600 rounded text-center w-8" />
                    <h4>{quantity * product.price}</h4>
                    <div className="grid items-end">
                        <Link className="bg-sky-500 p-2 font-RalewayDot rounded-md w-fit h-fit hover:bg-rose-300" to={"/products/" + product.id} >View</Link>
                    </div>
                </div>

                <div className="flex-grow border-t border-gray-400 m-2"></div>
            </div>
            
        </div>
    )
}

export default CartRow;