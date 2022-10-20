import React from 'react';
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
import CartProvider from './providers/CartProvider';



function App() {
  

  // let path = window.location.pathname
  return (
    <div className='relative'>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <div className="absolute md:top-80 top-48 md:left-0 left-12">
              <Allert/>
            </div>
            <Nav />

            <div className='grow'>
              <Routes>
                <Route path="/" element={<LoginRoute> <ProductListPage /> </LoginRoute>} />
                <Route path="/products/:id/" element={<ProdDetail />} />
                <Route path="*" element={<Err404 />} />
                <Route path="/Cart" element={<CartListpage/>} />
                <Route path="log-In" element={<AuthRoute> <LogIn /> </AuthRoute>} />
                <Route path="sign-Up" element={ <AuthRoute> <SignUp /> </AuthRoute>} />
                <Route path="forgotpswd" element={<ForgotPswd/>} />
                <Route path="/accounts" element={<Accounts />} />
                {/* <Route path="/test" element={<Test/>} /> */}
                <Route path="/tandc" element={<TandC/>} />
              </Routes>
            </div>
            
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider> 
    </div>
  )
}
export default App;