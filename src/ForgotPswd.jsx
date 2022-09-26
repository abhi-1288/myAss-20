import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik';

function ForgotPswd (){
    function frgtPswdApi (values){
        // console.log('callLoginApi')
        console.log(values.email, values.password) 
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
    })
    const {handleSubmit, values, handleChange, errors, handleBlur, touched, isValid} = useFormik({
        initialValues:{
            email: "",
        },
        onSubmit: frgtPswdApi,
        validationSchema: schema,
    })


    return(
        <div>
            <div className='md:flex justify-center mb-4'>
                <form onSubmit={handleSubmit} className='md:w-3/4 flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold font-Satisfy italic text-cyan-400'>Forgot Password</h1>
                    <h2 className='text-6xl text-red-500 font-Qwitcher'>Enter Your Email</h2>
                    <input onBlur={handleBlur} name='email' value={values.email} onChange={handleChange}  id='email' autoComplete="email" required type="email" className='border-2 border-red-400 rounded m-2 font-Qwitcher text-3xl' placeholder='Email'/>
                    {touched.email && errors.email && <div className='text-red-500 rounded font-Shadows text-2xl p-2' >{errors.email}</div> }
                    <button disabled={!isValid} type='submit' className='disabled:bg-neutral-700 disabled:hover:none bg-red-400 p-2 hover:bg-sky-500 text-2xl font-Dancing rounded-lg m-2'>Get OTP</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPswd