import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import CartList from "./CartList";

function CartListPage({cart, updateCart}){
  const [products, setProducts] = useState([])
  const productsIDs = Object.keys(cart)
  const [loading, setLoading] = useState(true)

    useEffect(function(){
        setLoading(true)
        const myProductPromise = productsIDs.map(function(id){
            return getProductData(id)
        })

        Promise.all(myProductPromise).then(function(products){
            setProducts(products)
            setLoading(false)
        })
    },[cart])

  if(loading){
    return <Loading />
  }

  
  return (
    <div className="cart-list-page">
      <CartList products={products} cart={cart} updateCart={updateCart}/>
    </div>
  )
}

export default CartListPage