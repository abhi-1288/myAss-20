//product detail page

import React from 'react';
import { Link, useParams} from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useEffect, useState } from 'react';
import { getProductData } from './api';
import Loading from './Loading';
import Err404 from './Err404';

function ProdDetail({onCart}){
  const id = +(useParams().id)
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(1)

  //[] empty array => refersh code once only

  useEffect(function () {
  
  const pr = getProductData(id)

  pr.then(function(response){
    setProduct(response)
    setLoading(false)

  }).catch(function(){
    setLoading(false)
  })
}, [id])

function handleInputInitial() {
  setCount(1);
  setLoading(true)
}

  function handleValue(event){
    setCount(+event.target.value)
  }

  function onButtonClick(){
    onCart(id, count)

  }


  if(loading){
    return <Loading />
  }

  if(!product){
    return <Err404 />;
  }



// product ? : (<Loading />)

  return (
    <div className='grow'>

      <Link to= "/" onClick={handleInputInitial}> <IoArrowBackCircleOutline className="w-8 h-8 m-2" /> </Link>
    
    <div className="md:flex-row flex flex-col text-center items-center   p-2 my-5 bg-slate-400/50 m-2 rounded-md md:space-x-6">
        <div className="md:w-72 w-64 md:h-80 h-64">
          <img className="w-full h-full object-cover rounded hover:shadow-2xl hover:shadow-black md:hover:scale-150 md:hover:ml-16 transition-all" src={product.thumbnail}/>
        </div>
        <div className="flex flex-col md:space-y-4">
          <h2 className="text-xl text-black font-semibold font-mono">
            {product.title}
          </h2>

          <h3 className="text-lg text-black font-semibold font-sans">
            ₹ {product.price}
          </h3>

          <p className="md:font-normal text-sm font-serif italic my-2">
            {product.description}
          </p>
          
          <div className="justify-center space-x-2 flex ">
            <div>
              
              <input type="number" value={count} onChange={handleValue} className="border-2 border-orange-600 rounded text-center w-8"/>
              
            </div>
            <button onClick={onButtonClick} className="bg-rose-400 px-2 py-1 rounded border-2 font-Qwitcher text-2xl border-orange-500 hover:bg-red-600 ">
              ADD TO CART
            </button>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
              { id > 1 && (<Link onClick={handleInputInitial} to={"/products/" + (id -1)} > < FcPrevious className='h-10 w-10'/> </Link>) }
            </div>
            <div>
              <Link onClick={handleInputInitial} to={"/products/" + (id + 1)} > < FcNext className='h-10 w-10'/> </Link>
              </div>
          </div>

        </div>
      </div>

    </div>
  ) 
}

export default ProdDetail;