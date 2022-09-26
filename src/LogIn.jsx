import { useFormik } from 'formik';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'

function LogIn(){

    function callLoginApi (values){
        // console.log('callLoginApi')
        console.log(values.email, values.password) 
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8, ).required(),
    })

    const {handleSubmit, values, handleChange, resetPage, errors, handleBlur, touched, isValid} = useFormik({
        initialValues:{
            email: "",
            password: "",
        },
        onSubmit: callLoginApi,
        validationSchema: schema,
    })


    return(
        <div >
            <div className='justify-center flex'>
                <Link to="/"><img src="/imgs/weSHOP-removebg-preview.png" className="md:w-40 w-32" /></Link>
            </div>

            <div className='md:flex justify-center mb-4'>
                <form onSubmit={handleSubmit} className='md:w-3/4 flex flex-col justify-center text-center border-2 border-red-400 rounded-md m-4 items-center'>
                    <h1 className='text-4xl font-Shadows font-black '>Log-In</h1>
                    <h2 className='text-4xl font-Satisfy text-blue-500 m-2'>Enter Your Email</h2>
                    <label className='sr-only' htmlFor="email" placeholder='email'>EMAIL</label>
                        <input onBlur={handleBlur} name='email' value={values.email} onChange={handleChange}  id='email' autoComplete="email" required type="email" className='border-2 border-red-400 rounded m-2 font-Qwitcher text-3xl' placeholder='Email'/>
                    {touched.email && errors.email && <div className='text-red-500 rounded font-Shadows text-2xl p-2' >{errors.email}</div> }

                    <h2 className='text-4xl font-Satisfy text-blue-500 m-2'>Enter Your Password</h2>
                    <label className='sr-only' htmlFor="password">PASSWORD</label>
                        <input onBlur={handleBlur} name='password' value={values.password} onChange={handleChange} id='password' autoComplete='current-password'  type="password" className='border-2 border-red-400 rounded m-2 font-Qwitcher text-3xl' placeholder='password'/>
                    
                    {touched.password && errors.password &&( <div className='text-red-500 rounded font-Shadows text-2xl p-2' >{errors.password}</div> )}
                    
                    <div className='md:flex grid'>
                        <button type='button' onClick={resetPage} className='bg-sky-500 p-2 hover:bg-red-400 text-2xl font-Dancing rounded-lg m-2'>RESET</button>
                        <button disabled={!isValid} type='submit' className='disabled:bg-neutral-700 disabled:hover:none bg-red-400 p-2 hover:bg-sky-500 text-2xl font-Dancing rounded-lg m-2'>NEXT</button>
                    </div>
                </form>
            </div>

            <Link to="/forgotPswd" className='text-gray-500 text-lg justify-center flex font-mono'>Forgot PassWord</Link>
            
            <div className='border-t-2 border-t-gray-400 mx-4'></div>

            <div className='flex md:flex-row flex-col justify-center mb-4 items-center'>
                <h1 className='flex md:flex-row flex-col items-center text-3xl text-blue-400 font-Pacifico'>New Here, <span className='text-rose-500'> Create An ACCOUNT </span></h1>
                <Link to='/sign-Up' className='text-red-400 mx-2 underline font-Shadows text-3xl hover:italic'> <h1>CREATE</h1> </Link>
            </div>
        </div>
    )
}


export default LogIn



