import { useState } from 'react'
// import './App.css'
import Login from "./pages/Login"
import LoginEmployee from "./pages/LoginEmployee"


import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Assets from "./pages/Assets"
import Employees from "./pages/Employees"
import Calendar from "./pages/Calendar"
import Registration from "./pages/Registration"
import CreateAsset from "./pages/CreateAsset"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
// import Login from "./pages/Login"
import {Route, Routes, useParams } from "react-router-dom"
import Checkouts from './pages/Current_actions/Checkouts'
import Reservations from './pages/Current_actions/Reservations'
import Damages from './pages/Current_actions/Damages'
import Maintenance from './pages/Current_actions/Maintenance'
import AssetProperties from './pages/AssetProperties'
import axios from 'axios'
import { useEffect } from 'react'
import Employee from './pages/Employee'
import User from './pages/User'



function App() {

  // let {id} = useParams()

 


  return (
    <div>
      <Header />
      <Sidebar />
      {/* <Dashboard/> */}
      <Footer />

    
    <div>
      <Routes>
        <Route path='/Asset-guard' element={<Dashboard />} />
        <Route path='/Asset-guard/calendar' element={<Calendar />} />
        <Route path='/Asset-guard/create-asset' element={<CreateAsset />} />
        <Route path='/Asset-guard/employees' element={<Employees />} />
        <Route path='/Asset-guard/profile' element={<Profile />} />
        <Route path='/Asset-guard/employee/:id' element={<Employee />} />
        <Route path='/Asset-guard/registration' element={<Registration />} />
        <Route path='/Asset-guard/assets' element={<Assets />} />
        <Route path='/Asset-guard/asset-property' element={<AssetProperties />} />
        <Route path='/Asset-guard/checkouts' element={<Checkouts />} />
        <Route path='/Asset-guard/reservations' element={<Reservations />} />
        <Route path='/Asset-guard/damages' element={<Damages />} />
        <Route path='/Asset-guard/maintenance' element={<Maintenance />} />
        <Route path='/Asset-guard/create-asset' element={<CreateAsset />} />
        <Route path='/Asset-guard/user/:id' element={<User />} />

      </Routes>
    </div>



    </div>
  )
}

export default App
