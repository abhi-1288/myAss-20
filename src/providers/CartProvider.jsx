import React, { useEffect, useState } from "react";
import { getCart, getProductsByIds, saveCart } from "../api";
import { CartContext } from "../Contexts";
import { WithUser } from "../WithProvider";

// CartProvider component
function CartProvider( {children, isLoggedIn} ) {

    const [cart, setCart] = useState({})


    useEffect(() => {
      if(isLoggedIn){
        getCart().then(function(savedCart){
          setCart(savedCart)
      })
      }else{
        const savedDataString = localStorage.getItem("my-cart") || "{}"
        const savedData = JSON.parse(savedDataString)
        quantityMapToCart(savedData)
        
      }
    }, [isLoggedIn])
    

    function quantityMapToCart (quantityMap) {
      getProductsByIds(Object.keys(quantityMap)).then((products) => {
        const savedCart = products.map((p) => ({ 
          product: p, 
          quantity: quantityMap[p.id], 
          // subTot: p.price * savedData[p.id]
        }));
        setCart(savedCart)
      })
    }

    function addToCart(productId, count){
      const quantityMap = cart.reduce(
        (m, cartItem) => ({...m, [cartItem.product.id]: cartItem.quantity}),
        {}
      );

      
      const oldCount = quantityMap[productId] || 0

      const newCart = {...quantityMap, [productId]: oldCount + count};
      updateCart(newCart);
    }
  
    function updateCart(quantityMap){

      if(isLoggedIn){
        saveCart(quantityMap).then(function(response){
          // setCart(response)
          
        quantityMapToCart(quantityMap)
        })
      }else{
        const cartString = JSON.stringify(quantityMap)
        localStorage.setItem("my-cart", cartString)
        
        quantityMapToCart(quantityMap)
      }
    }
  
    const cartCount = Object.keys(cart).reduce(function (previous, current){
      return previous + current.quantity;
    }, 0)


  return (
    <CartContext.Provider value={{cart, cartCount, updateCart, addToCart }}> { children } </CartContext.Provider>
  )
}

export default WithUser(CartProvider);
