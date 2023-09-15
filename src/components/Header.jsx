import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>

  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars" />
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/Asset-guard" className="nav-link">
          Home
        </Link>
      </li>
    
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
     
     
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">
            15 Notifications
          </span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
          <i className="nav-icon far bi bi-box-arrow-left" /> 4 new Checkout requests
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
          <i className="nav-icon far bi bi-exclamation-diamond-fill" /> 8 damage reports
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
          <i className="nav-icon far bi bi-box-arrow-in-right" /> 3 check ins
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      <li className="nav-item">
      <button className="btn btn-block btn-danger" type="button">signout</button>
      </li>
    </ul>
  </nav>
  {/* /.navbar */}


    </div>
  )
}

export default Header