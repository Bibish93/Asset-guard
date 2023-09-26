import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const login = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>

  
        {/* <Header /> */}

    <div className='hold-transition login-page d-flex flex-column min-vh-100'>
        <div className="pl-100 grid place-items-center login-box">
  <div className=" login-logo">
    <a href="../../index2.html">
      <b>Asset</b>guard
    </a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in as employee</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <Field type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <Field
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {/* <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div> */}
          </div>
          {/* /.col */}
          <div className="container d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="mr-2" /> Sign in as admin
        </a>
       
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
     
    </div>
    {/* /.login-card-body */}
  </div>
</div>

   

    </div>

    <Footer />

    </div>



    
  )
}

export default login