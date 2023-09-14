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
import {Route, Routes} from "react-router-dom"
import Checkouts from './pages/Current_actions/Checkouts'
import Reservations from './pages/Current_actions/Reservations'
import Damages from './pages/Current_actions/Damages'
import Maintenance from './pages/Current_actions/Maintenance'


function App() {


  return (
    <div>
      <Header />
      <Sidebar />
      {/* <Dashboard/> */}
      <Footer />

    
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/create-asset' element={<CreateAsset />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/checkouts' element={<Checkouts />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/damages' element={<Damages />} />
        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/create-asset' element={<CreateAsset />} />

      </Routes>
    </div>



    </div>
  )
}

export default App
