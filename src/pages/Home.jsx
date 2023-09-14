import React from 'react'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard"
const Home = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <Dashboard />
        <Footer />


    </div>
  )
}

export default Home