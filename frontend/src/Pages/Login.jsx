import React, { useContext, useState } from 'react'

import '../App.css'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext.jsx'
import { BASE_URL } from '../Others/config.js'

const Login = () => {
   const [credentials, setCredentials] = useState({
      email: undefined,
      password: undefined
   })

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()

      dispatch({type:'LOGIN_START'})

      try {
         const res = await fetch(`${BASE_URL}/auth/login`, {
            method:'post',
            headers: {
               'content-type':'application/json'
            },
            credentials:'include',
            body: JSON.stringify(credentials)
         })

         const result = await res.json()
         if(!res.ok) alert(result.message)
         console.log(result.data)

         dispatch({type:"LOGIN_SUCCESS", payload:result.data})
         navigate('/')
      } catch(err) {
         dispatch({type:"LOGIN_FAILURE", payload:err.message})
      }
   }

   return (
      <section className="pt-6 px-15 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5 md:p-10 bg-black">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form onSubmit={handleClick} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full  py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-black placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
             id="password"
              onChange={handleChange}
              className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-black placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-textColor text-center">
          Don&apos;t have an account{" "}
          <Link to="/register" className="text-primaryColor font-medium ">
            Register
          </Link>
        </p>
      </div>
    </section>
   )
}

 

export default Login