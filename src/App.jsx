import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import ProductListPage from './ProductListPage';
import ProdDetail from './ProdDetail'
import Err404 from './Err404';
import CartListpage from './CartListPage';


function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}"
  const savedData = JSON.parse(savedDataString)
  const [cart, setCart] = useState(savedData)

  
  function handleCart(productId, count){
    const oldCount = cart[productId] || 0

    const newCart = {...cart, [productId]: oldCount + count}
    setCart(newCart)
    const cartString = JSON.stringify(newCart)
    localStorage.setItem("my-cart", cartString)
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current){
    return previous + cart[current]
  }, 0)


  // let path = window.location.pathname
  return (
    <div>
      {/* hello */}
      <Nav productCount={totalCount} />
      <div className='grow'>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:id/" element={<ProdDetail onCart={handleCart}/>} />
          <Route path='/Cart' element={ <CartListpage /> }/>
          <Route path="*" element={<Err404 />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App;





