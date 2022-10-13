import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import ProductListPage from './ProductListPage';
import ProdDetail from './ProdDetail'
import Err404 from './Err404';
import CartListpage from './CartListPage';
import SignUp from './SignUp';
import LogIn from './LogIn';
import ForgotPswd from './ForgotPswd';
import Accounts from './Accounts';
import AuthRoute from './AuthRoute';
import LoginRoute from './LoginRoute';
// import Test from './Test';
import Allert from './Allert';
import TandC from './TandC';
import UserProvider from './providers/UserProvider';
import AlertProvider from './providers/AlertProvider';



function App() {
  
  const savedDataString = localStorage.getItem("my-cart") || "{}"
  const savedData = JSON.parse(savedDataString)
  const [cart, setCart] = useState(savedData)
  



  function handleCart(productId, count){
    const oldCount = cart[productId] || 0

    const newCart = {...cart, [productId]: oldCount + count}
    updateCart(newCart)
  }

  function updateCart(newCart){
    setCart(newCart)
    const cartString = JSON.stringify(newCart)
    localStorage.setItem("my-cart", cartString)
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current){
    return previous + cart[current]
  }, 0)

  // let path = window.location.pathname
  return (
    <div className='relative'>
      <UserProvider>
        <AlertProvider>
          <div className="absolute md:top-80 top-48 md:left-0 left-12">
            <Allert/>
          </div>
          <Nav productCount={totalCount} />

          <div className='grow'>
            <Routes>
              <Route path="/" element={<LoginRoute> <ProductListPage /> </LoginRoute>} />
              <Route path="/products/:id/" element={<ProdDetail onCart={handleCart} />} />
              <Route path="*" element={<Err404 />} />
              <Route path="/Cart" element={<CartListpage cart={cart} updateCart={updateCart}/>} />
              <Route path="log-In" element={<AuthRoute> <LogIn /> </AuthRoute>} />
              <Route path="sign-Up" element={<SignUp />} />
              <Route path="forgotpswd" element={<ForgotPswd/>} />
              <Route path="/accounts" element={<Accounts setCart={updateCart} cart={cart} />} />
              {/* <Route path="/test" element={<Test/>} /> */}
              <Route path="/tandc" element={<TandC/>} />
            </Routes>
          </div>

          <Footer />
        </AlertProvider>
      </UserProvider> 
    </div>
  )
}
export default App;





