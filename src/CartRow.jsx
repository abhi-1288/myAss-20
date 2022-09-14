import React, {useState, useEffect} from "react";
// import { getProductData } from "./api";
import { Link } from "react-router-dom";

function CartRow({thumbnail, title, price, id}){

    const [subtot, newSubtot] = useState(price)    
    const [val, iniVal] = useState(1)

    function newValue(event){
        iniVal(+event.target.value)
        console.log("the value is",subtot)
       newSubtot(iniVal * price)
    }
    return(
        <div>
            <div className="">
                
                <div className="flex md:flex-row md:w-auto w-44 flex-col justify-between items-center">
                    <div className="w-32 h-32 ">
                        <img src={thumbnail} className="w-full h-full mx-2" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-black font-mono text-lg">{title}</h3>
                        <h5  className="text-orange-600 font-sans text-md mb-2">₹ {price}</h5>
                    </div>
                    <input type="number" onChange={newValue}  value={val} className="border-2 border-orange-600 rounded text-center w-8" />
                    <h4>{subtot}</h4>
                    <div className="grid items-end">
                        <Link className="bg-sky-500 p-2 font-RalewayDot rounded-md w-fit h-fit hover:bg-rose-300" to={"/products/" + id} >View</Link>
                    </div>
                </div>

                <div className="flex-grow border-t border-gray-400 m-2"></div>
            </div>
            
        </div>
    )
}

export default CartRow;