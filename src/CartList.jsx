import React, {useState, useEffect}from "react";
import Button from "./Button";
import CartRow from "./CartRow";

function CartList({products, cart, updateCart }){

    
  const [localCart, setLocalCart] = useState(cart)

  useEffect(function(){
    setLocalCart(cart)
  }, [cart])

  function handleQuantityChange (productId, newNum){
    const newLocalCart = {...localCart, [productId]:newNum};
    setLocalCart(newLocalCart);

}

const handleUpdateCart = () => {
    updateCart(localCart)
};

function prodDelete(productId){
    console.log("item removed")
    const newCart = {...cart}
    delete newCart [productId]
    updateCart(newCart)
    // setLoading(true)
}


    

    return(
        <>
        <h2 className="text-red-400 text-5xl mx-2 font-RalewayDot">my CART</h2>
        <div className="flex">
            <div className="m-2 rounded-lg border-2 md:w-11/12 w-auto border-red-400 flex flex-col p-2">

                {products.map(function(p){
                    return <CartRow key={p.id} product={p} quantity={localCart[p.id]} onQuantityChange={handleQuantityChange} onRemove={prodDelete} />
                })}

            </div>
            <div className="m-2 rounded-lg border-2 border-red-400 flex flex-col md:w-auto w-36 p-2 h-min ">
                <Button onClick={handleUpdateCart} >Update Cart</Button>
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