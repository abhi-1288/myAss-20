import React, {useState, useEffect}from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import { WithCart } from "./WithProvider";

function CartList({ cart,  updateCart }) {

  
  const [quantityMap, setQuantityMap] = useState({});


  const cartToQuantityMap = () => cart.reduce((m, cartItem) => ({...m, [cartItem.product.id]: cartItem.quantity}), {});

  useEffect(function () {
    setQuantityMap(cartToQuantityMap);
  }, [cart]);

    function handleQuantityChange(productId, newQuantity) {
      const newQuantityMap = {...quantityMap, [productId]: newQuantity};
      setQuantityMap(newQuantityMap);

    }

    function prodDelete(productId){
        console.log("item removed")
        const newQuantityMap = cartToQuantityMap();
        delete newQuantityMap[productId];
        updateCart(newQuantityMap)

    }

    function handleUpdateCart(){
        updateCart(quantityMap)
    }

    return(
        <>
        {/* hello */}
        <h2 className="text-red-400 text-5xl mx-2 font-RalewayDot">my CART</h2>
        <div className="flex">
            <div className="m-2 rounded-lg border-2 md:w-11/12 w-auto border-red-400 flex flex-col p-2">

            {cart.map((cartItem) => (
                <CartRow
                    key={cartItem.product.id}
                    product={cartItem.product}
                    quantity={quantityMap[cartItem.product.id]}
                    onQuantityChange={handleQuantityChange}
                    onRemove={prodDelete}
                />
            ))}

            </div>
            <div className="m-2 rounded-lg border-2 border-red-400 flex flex-col md:w-auto w-36 p-2 h-min ">
                <Button onClick={handleUpdateCart} >Update Cart</Button>
                <h1 className="text-red-400 text-xl font-semibold ">Total</h1>
                <h3 className="text-red-500 text-3xl font-Caveat">${}</h3>
                <div className="flex justify-center">
                    <input type="text" className="border-4 border-sky-500 dark:text-black rounded m-2 md:w-full w-20" placeholder="Coupon Code" />
                </div>
                <button className="p-2 bg-red-400 hover:bg-sky-500 rounded-md text-base font-Qwitcher">PROCEED TO CHECKOUT</button>
            </div>
        </div>
        </>
    )
}

// export default CartList;
export default WithCart(CartList);