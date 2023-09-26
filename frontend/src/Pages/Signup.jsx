import React, { useState, useContext } from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/signup.gif'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext.jsx'
import "../App.css"
import { BASE_URL } from '../Others/config'

const Register = () => {
  const [credentials, setCredentials] = useState({
      userName: undefined,
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

      try {
         const res = await fetch(`${BASE_URL}/auth/register`, {
            method:'post',
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok) alert(result.message)

         dispatch({type:'REGISTER_SUCCESS'})
         navigate('/login')
      } catch(err) {
         alert(err.message)
      }
   }

   return (
        /* <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={registerImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder='Username' id='username' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                        </Form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>*/
<section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={registerImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Sign up form  */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={handleClick}>
              <div className="mb-5">
                <input
               className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-black placeholder:text-textColor rounded-md cursor-pointer"

                type="text" placeholder='Username' id='username' onChange={handleChange} required 
                />
              </div>
              <div className="mb-5">
                <input
                className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-black placeholder:text-textColor rounded-md cursor-pointer"

                  required
                 type="email" placeholder='Email' id='email' onChange={handleChange}
               
                />
              </div>
              <div className="mb-5">
                <input
               className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-black placeholder:text-textColor rounded-md cursor-pointer"

                 type="password" placeholder='Password' id='password' onChange={handleChange} required
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
                >
                  Signup
                </button>
              </div>
            </form>
            <p className="mt-5 text-textColor text-center">
              Already have an account?
              <Link to="/login" className="text-primaryColor font-medium ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
      

   )
}

  

 

export default Register