import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import {Link} from 'react-router-dom'
import {FaTimes} from "react-icons/fa"
import Loading from "./Loading";

function CartListpage({cart, updateCart}){
  const [products, setProducts] = useState([])
  const productsIDs = Object.keys(cart)
  const [loading, setLoading] = useState(true)
  const [localCart, setLocalCart] = useState(cart)


  // console.log("Product ids", cart, productsIDs)

  const [subTot, setSubTot] = useState(1)

    function prodDelete(event){
        const productId = event.currentTarget.getAttribute("productid")
        console.log("item removed")

        const newCart = {...cart}
        delete newCart [productId]
        console.log("remove", cart)
        updateCart(newCart)
        console.log('new cart is', newCart)
        setLoading(true)
    }


    function updateMyCart(){
      updateCart(localCart)
    }

    function newValue (event){
        const newNum = +event.target.value;
        const productId = event.target.getAttribute('productid');
        const newLocalCart = {...localCart, [productId]:newNum};
        setLocalCart(newLocalCart);

    }

    // if(subTot == 0){
    //     return <div></div>
    // }

    useEffect(function(){
      setLocalCart(cart)
    }, [cart])

  useEffect(function(){
    const myProductPromise = productsIDs.map(function(id){
      return getProductData(id)
    })

    // const myProductPromise 

    Promise.all(myProductPromise).then(function(products){
      setProducts(products)
      setLoading(false)
    })
    
  },[cart])

  if(loading){
    return <Loading />
  }

  return(
    
    <div>
      {/* <h1>This Is cart Page</h1> */}
      <h2 className="text-red-400 text-5xl mx-2 font-RalewayDot">my CART</h2>
      <div className="flex">
        <div className="m-2 rounded-lg border-2 border-red-400 flex flex-col md:w-full w-48 p-2 h-min ">
          {products.map(function(p){
          return(
            <div>
              <div key={p.id} className="md:flex-row flex md:w-auto w-44 flex-col items-center justify-between text-center">
                      <button productid={ p.id} onClick={prodDelete}>
                          <FaTimes />
                      </button>

                      <div className="w-32 md:w-40 h-32 ">
                          <img src={p.thumbnail} className="w-full h-full mx-2" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-black font-mono text-lg">{p.title}</h3>
                          <h5  className="text-orange-600 font-sans text-md mb-2">₹ {p.price}</h5>
                      </div>
                      <input productid={p.id} id="val" type="number" onChange={newValue}  value={localCart[p.id]} className="border-2 border-orange-600 rounded text-center w-10" />
                      <h4 className="text-slate-500 font-mono">{localCart[p.id] * p.price}</h4>
                      <div className="grid items-end">
                          <Link className="bg-sky-500 p-2 font-RalewayDot rounded-md w-fit h-fit hover:bg-rose-300" to={"/products/" + p.id} >View</Link>
                      </div>
                  </div>
              <div className="flex-grow border-t border-gray-400 m-2"></div>
            </div>
            
            
            )
          })}
        </div>
        <div className="m-2 rounded-lg border-2 border-red-400 flex flex-col md:w-auto w-36 p-2 h-min ">
          <button onClick={updateMyCart} className="p-2 bg-red-400 hover:bg-sky-500 rounded-md text-xl font-Qwitcher">Update Cart</button>
          <h1 className="text-red-400 text-xl font-semibold ">Total</h1>
          <h3 className="text-red-500 text-3xl font-Caveat">${}</h3>
          <input type="text" className="border-4 border-sky-500 rounded m-2 md:w-full w-20" placeholder="Coupon Code" />
          <button className="p-2 bg-red-400 hover:bg-sky-500 rounded-md text-base font-Qwitcher">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )

   
}

export default CartListpage


