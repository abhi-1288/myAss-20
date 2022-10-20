import React, { useState, useEffect } from "react";
import { getCart, getProductsByIds, saveCart } from "../api";
import { CartContext } from "../Contexts";
import { WithUser } from "../WithProvider";

// CartProvider component
function CartProvider({ isLoggedIn, children }) {

  
  const [cart, setCart] = useState([]);

    useEffect(function() {
    
    if(isLoggedIn){
      getCart().then(function(savedCart){
        setCart(savedCart)
      })

      
    }else{
      const savedDataString = localStorage.getItem("my-cart") || "{}";
      const savedData = JSON.parse(savedDataString);
      quantityMapToCart(savedData);
    }
    

  }, [isLoggedIn])

  function quantityMapToCart(quantityMap){
    getProductsByIds(Object.keys(quantityMap)).then(function(products){
      const savedCart= products.map((p) => ({
          product: p,
          quantity: quantityMap[p.id]
        }))
        setCart(savedCart)
    })

  }

    function addToCart (productId, count) {
        const oldCount = cart[productId] || 0;
        const newCart = {...cart, [productId]: oldCount + count};
        updateCart(newCart);
    }

    function updateCart (quantityMap) {
      // setCart(newCart);

        if(isLoggedIn){
          saveCart(quantityMap).then(function(response){
            // setCart(response.data)
            quantityMapToCart(quantityMap)
          })
          
        }else{
          const cartString = JSON.stringify(quantityMap);
          localStorage.setItem("my-cart", cartString);
          quantityMapToCart(quantityMap);
        }
    }

    const cartCount = cart.reduce(function(previous, current){
        return previous + current.quantity;
    }, 0);


  return (
    <CartContext.Provider value={{cart, cartCount, updateCart, addToCart }}> { children } </CartContext.Provider>
  )
}

export default WithUser(CartProvider);
