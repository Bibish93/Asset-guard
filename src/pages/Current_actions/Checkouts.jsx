import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Modal from '../../components/Modal'



const ByEmployee = () => {


  const [finalCheckout, setFinalCheckout] = useState([])
  const [checkouts, setCheckouts] = useState([])

  const [selectedAsset, setSelectedAsset] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const [assets, setAssets] = useState([])
  

  const [selectedAssetId, setSelectedAssetId] = useState(null)


  const handleClick = (id) =>{
    const selectedAsset = assets.find((asset) => asset.id === id)
    setSelectedAsset(selectedAsset)
    // console.log(selectedUser);
}







useEffect(()=>{

  axios.get("http://localhost:3000/assets/associate").then((response)=>{
    // setCheckouts(prevData => (
    //   [...prevData, response.data]
    // ))
    // console.log(checkouts);


    const usersWithModels = response.data.map(user => {
      const models = user.asset.map(asset => asset.model)
      return {
        name: user.name,
        department: user.department,
        room: user.room,
        // models: models.length > 1 ? models : models[0]
        models: Array.isArray(models) ? models : [models]
      }
    })
    setFinalCheckout(
        usersWithModels
      
    )
    console.log(finalCheckout);

    
    




  })


  
  axios.get("http://localhost:3000/assets").then((response)=>{
    setAssets(response.data)
    console.log(assets);
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
    <h1>Checkouts</h1>
    
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
          Checkout details
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
              <th>assets under possession</th>
              
             
            </tr>
          </thead>
          <tbody>
          {finalCheckout.map((user) => (
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


                      // <button className='btn btn-link' 
                      //                 onClick={()=>{handleClick(value.id)
                      //                 setOpenModal(true)
                      //               setSelectedSerial(null)}}

                      //                 >{value.model}</button>
                      <a className="dropdown-item"
                       key={model} 
                       onClick={()=>{setSelectedAssetId(user.id)
                                      console.log(selectedAssetId);
                                      handleClick(selectedAssetId)
                                      setOpenModal(true)
                                      setSelectedSerial(null)}}
                       href="#">{model}</a>
                     
                    ))}
              </div>
            </div>

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

export default ByEmployee