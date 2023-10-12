// import React from 'react'
import {React, useState, useContext} from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router'

import { AuthContext } from '../../helpers/AuthContext'

const login = () => {


  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setIsValid] = useState(false)

  const { setAuthState } = useContext(AuthContext)
 const nav = useNavigate()
  
  
  
  
  const onSubmit = (e) =>{
    
    e.preventDefault()
    const loginData = {email: email, password: password}
    axios.post("http://localhost:3000/login", loginData).then((response) => {
      if(response.data.error) alert(response.data.error)
      
      
      else {
        localStorage.setItem("accessToken", response.data)
        setAuthState(true)
        nav("/Asset-guard")
        

      }   
     
    

    
    

    
    
    })
    

    
  }






  return (

    
    <div className='d-flex align-items-center justify-content-center mt-5 '>
<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Asset</b>Guard</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in as an admin to start your session</p>

     
      
      <div>
      <div className="form-group">
     <label htmlFor="exampleInputEmail1">Email address</label>
     {/* <ErrorMessage className='row col-sm-6 text-danger' name='email' component="span"/> */}
     <input 
       name='email' 
         type="text"
         className="form-control"
         id="exampleInputEmail1"
         placeholder="Enter email"
         onChange={
           (e) =>{
             const email = e.target.value
             setEmail(email)
           }
         }
     />
     </div>
     <div className="form-group">
     <label>password</label>
     {/* <ErrorMessage className='row col-sm-6 text-danger' name='password' component="span"/> */}
     <input 
       name='password' 
       id='password' 
       type="password"
       className="form-control"
       placeholder="Enter ..."
       onChange={
         (e) =>{
           const password = e.target.value
           setPassword(password)
         }
       }
     />
   </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="button" onClick={onSubmit} className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </div>

      
      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
       
        <a href="#" className="btn btn-block btn-danger">
           Sign in as employee
        </a>
      </div>
      {/* /.social-auth-links */}
      {/* <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p> */}
      {/* <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p> */}
    </div>
    {/* /.login-card-body */}
  </div>
</div>

      
    </div>



    
  )
}

export default login