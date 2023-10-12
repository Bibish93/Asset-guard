import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Reservations = () => {



  const [finalReserve, setFinalReserve] = useState([])
  const [checkouts, setCheckouts] = useState([])

useEffect(()=>{

  axios.get("http://localhost:3000/assets/reserve").then((response)=>{
    // setCheckouts(prevData => (
    //   [...prevData, response.data]
    // ))
    // console.log(checkouts);


    const usersWithModels = response.data.map(user => {
      const models = user.asset.map(asset => asset.model)
      // const reservationDate = user.asset.map(date => date.reservation)
      const reservationDate =  user.asset[0]?.reservation.ReservationDate
      return {
        name: user.name,
        department: user.department,
        room: user.room,
        // models: models.length > 1 ? models : models[0]
        models: Array.isArray(models) ? models : [models],
        reservationDate: reservationDate,
      }
    })
    setFinalReserve(
        usersWithModels
      
    )
    console.log(finalReserve);

    
    




  })
}, [])


  return (
    <div>

<>
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
{/* Content Header (Page header) */}
<section className="content-header">
<div className="container-fluid">
<div className="row mb-2">
  <div className="col-sm-6">
    <h1>Reservations</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item">
        
      </li>
      
    </ol>
  </div>
</div>
</div>
{/* /.container-fluid */}
</section>
{/* Main content */}
<section className="content">
<div className="container-fluid">
<div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          Reservations
        </h3>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <table
          id="example2"
          className="table table-bordered table-hover"
        >
          <thead>
            <tr>
            <th>Full Name</th>
              <th>Department</th>
              <th>Room No.</th>
              <th>assets reserved</th>
              <th>date reserved for</th>
              
             
            </tr>
          </thead>
          <tbody>
          {finalReserve.length > 0 && finalReserve.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>
               {user.department}
              </td>
              <td>
               {user.room}
              </td>
              <td>
                          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                assets
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {user.models &&
                    user.models.map((model) => (
                      <a className="dropdown-item" key={model} href="#">{model}</a>
                     
                    ))}
              </div>
            </div>

              </td>
              <td>
                {user.reservationDate}
              </td>
            </tr>
          ))}
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</div>
</>
    </div>
  )
}

export default Reservations