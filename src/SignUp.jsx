import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { withFormik } from 'formik';
import axios from 'axios';
import WithUser from './WithUser';
import WithAlert from './WithAlert';

function signupApi(values, bag) {

  // console.log(values.email, values.password, values.fullName) 
  axios.post("https://myeasykart.codeyogi.io/signup", {
    email: values.email,
    password: values.password,
    fullName: values.fullName
  })
    .then((response) => {
      const { user, token } = response.data
      localStorage.setItem('token', token)
      bag.props.setUser(user)
      bag.props.setAlert({ type: "success", message: 'Account Created Successfully' })

    })
    .catch(() => {
      bag.props.setAlert({ type: "error", message: 'Invalid Email or Password or Username' })
    })

}


const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  fullName: Yup.string().min(4).required()
})

const initialValues = {
  email: "",
  password: "",
  fullName: "",
}

export function SignUp({
  handleSubmit,
  values,
  handleChange,
  errors,
  handleBlur,
  touched,
  isValid,
}) {


  return (
    <div >
      <div className='justify-center flex'>
        <Link to="/"><img src="/imgs/weSHOP-removebg-preview.png" className="md:w-40 w-32" /></Link>
      </div>
      <div className='md:flex justify-center mb-4'>
        <form onSubmit={handleSubmit} className='md:w-3/4 flex flex-col justify-center text-center border-2 border-red-400 rounded-md m-4 items-center'>
          <h1 className='text-4xl font-Shadows font-black '>Full Name</h1>
          <input onBlur={handleBlur} name='fullName' onChange={handleChange} type='text' autoComplete="fullName" required className='border-2 border-red-400 rounded m-2 font-Qwitcher text-3xl text-black' placeholder='fullName' />

          <h1 className='text-4xl font-Shadows font-black '>Email</h1>
          <input onBlur={handleBlur} name='email' onChange={handleChange} id='email' autoComplete="email" required type="email" className='border-2 border-red-400 rounded m-2 font-Qwitcher text-3xl text-black' placeholder='Email' />

          {touched.email && errors.email && <div className='text-red-500 rounded font-Shadows text-2xl p-2' >{errors.email}</div>}

          <h1 className='text-4xl font-Shadows font-black '>Password</h1>
          <input onBlur={handleBlur} name='password' onChange={handleChange} id='password' autoComplete='current-password' type="password" className='border-2 border-red-400 rounded m-2 font-Qwitcher text-3xl text-black' placeholder='password' />

          {touched.password && errors.password && (<div className='text-red-500 rounded font-Shadows text-2xl p-2' >{errors.password}</div>)}

          <button disabled={!isValid} type='submit' className='disabled:bg-neutral-700 disabled:hover:none bg-red-400 p-2 hover:bg-sky-500 text-2xl font-Dancing rounded-lg m-2'>CONTINUE</button>
        </form >
      </div>

      <div className='border-t-2 border-slate-500 mx-4'></div>

      <div className='flex md:flex-row flex-col justify-center mb-4 items-center'>
        <h1 className='flex md:flex-row flex-col items-center text-3xl text-blue-400 font-Pacifico'>Already Have AN ACCOUNT?</h1>
        <Link to='/log-in' className='text-red-400 mx-2 underline font-Shadows text-3xl hover:italic'> <h1>Click Here</h1> </Link>
      </div>
    </div>
  )
}


const mySignup = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: signupApi,
})(SignUp)

export default WithAlert(WithUser(mySignup));



