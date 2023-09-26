import React from 'react'
import {Link} from "react-router-dom"
import pic from "../../img/user2-160x160.jpg"
import logo from "../../src/assets/logo.jpg"
const Sidebar = () => {
  return (
    <div>
        <>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <Link to="/Asset-guard" className="brand-link">
      <img
        src={logo}
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        style={{ opacity: ".8" }}
      />
      <span className="brand-text font-weight-light">Assetguard</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src={pic}
            className="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div className="info">
          <Link to="/Asset-guard/profile" className="d-block">

            Dagim Debebe

           
          </Link>
        </div>
      </div>
     
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
         





         <li className="nav-header">Access</li>
          <li className="nav-item">
            <Link to="/Asset-guard/assets" className="nav-link">
              <i className="nav-icon far bi bi-laptop" />
              {/* <i className="fa-solid fa-laptop" /> */}

              <p>Assets</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Asset-guard/create-asset" className="nav-link">
              <i className="nav-icon far bi bi-plus" />
              {/* <i className="fa-solid fa-laptop" /> */}

              <p>Create Asset</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Asset-guard/employees" className="nav-link">
               <i className="nav-icon far bi bi-person" />
              <p>Employees</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Asset-guard/calendar" className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendar

              </p>
            </Link>
          </li>
         
         
          <li className="nav-item">
            <Link to="#" className="nav-link">
            <i className="nav-icon far bi bi-check2-square" />
              <p>
                current actions
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/Asset-guard/reservations" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>reservations</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Asset-guard/checkouts" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>checkouts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Asset-guard/damages" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>damages</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Asset-guard/maintenance" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>on maintenance</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/Asset-guard/registration" className="nav-link">
               <i className="nav-icon far bi bi-person-plus" />
              <p>Register new employees</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
            <i className="nav-icon far bi bi-clipboard-data" />
              <p>
                Reports
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>By employee</p>
                </Link>
              </li>
              <li className="nav-item">
                <a to="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>By date</p>
                </a>
              </li>
              <li className="nav-item">
                <Link to="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>By asset</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
          
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</>

    </div>
  )
}

export default Sidebar