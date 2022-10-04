import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import Loading from './Loading';
import AuthRoute from './AuthRoute';
import LoginRoute from './LoginRoute';
import Test from './Test';
// import axios from 'axios';

function App() {
  
  const savedDataString = localStorage.getItem("my-cart") || "{}"
  const savedData = JSON.parse(savedDataString)
  const [cart, setCart] = useState(savedData)
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);



  const token = localStorage.getItem('token');
  useEffect(() => {
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        } ,
      } )
      .then((response) => {
        setUser(response.data)
        setLoadingUser(false)
      })
    }else{
      setLoadingUser(false)
    }
  }, [])

  console.log("logged in user is", user)



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

  if(loadingUser){
    return <Loading />
  }

  // let path = window.location.pathname
  return (
    <div>
      {/* hello */}
      <Nav productCount={totalCount} user={user} />
      <div className='grow'>
        <Routes>
          <Route path="/" element={<LoginRoute user={user}> <ProductListPage /> </LoginRoute>} />
          {/* <Route path="/" element={<ProductListPage user={user} />} /> */}
          <Route path="/products/:id/" element={<ProdDetail onCart={handleCart} />} />
          <Route path="*" element={<Err404 />} />
          <Route path="/Cart" element={<CartListpage cart={cart} updateCart={updateCart}/>} />
          <Route path="log-In" element={<AuthRoute user={user}> <LogIn  setUser={setUser}/> </AuthRoute>} />
          {/* <Route path="log-In" element={<LogIn user={user} setUser={setUser}/>} /> */}
          <Route path="sign-Up" element={<SignUp/>} />
          <Route path="forgotpswd" element={<ForgotPswd/>} />
          <Route path="/accounts" element={<Accounts user={user} setUser={setUser}/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App;





