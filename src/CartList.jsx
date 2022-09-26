import React from "react";
import CartRow from "./CartRow";

function CartList({product}){

    return(
        <>
        <h2 className="text-red-400 text-5xl mx-2 font-RalewayDot">my CART</h2>
        <div className="flex">
            <div className="m-2 rounded-lg border-2 md:w-11/12 w-auto border-red-400 flex flex-col p-2">

            {product.map((product) => <CartRow {...product} />)}

            </div>
            <div className="m-2 rounded-lg border-2 border-red-400 flex flex-col md:w-auto w-36 p-2 h-min ">
                <h1 className="text-red-400 text-xl font-semibold ">Total</h1>
                <h3 className="text-red-500 text-3xl font-Caveat">${}</h3>
                <input type="text" className="border-4 border-sky-500 rounded m-2 md:w-full w-20" placeholder="Coupon Code" />
                <button className="p-2 bg-red-400 hover:bg-sky-500 rounded-md text-base font-Qwitcher">PROCEED TO CHECKOUT</button>
            </div>
        </div>
        </>
    )
}

export default CartList;