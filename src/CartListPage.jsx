import React from "react";
import CartList from "./CartList";
import allData from "./DummyData";

function CartListpage(){
    return(
        <div >
            <CartList item={allData} /> 
        </div>
    )
}

export default CartListpage