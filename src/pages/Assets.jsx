import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Modal from '../components/Modal'

const Assets = () => {
    
    const [assets, setAssets] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [serialNo, setSerialNo] = useState([])
    const [serialArr, setSerialArr] = useState([])
    const [selectedSerial, setSelectedSerial] = useState(null)
   


    useEffect(()=>{
        axios.get("http://localhost:3000/assets").then((response)=>{
          setAssets(response.data)
          console.log(assets);
        })
      },[])


      const [selectedAsset, setSelectedAsset] = useState(null)
  
      const handleClick = (id) =>{
          const selectedAsset = assets.find((asset) => asset.id === id)
          setSelectedAsset(selectedAsset)
          // console.log(selectedUser);
      }

      const getSerialNumbers = (object) =>{
        const noOfSer = Object.keys(object).length; // Get the length of the object
        const values = Object.values(object);
        const selectedValues = [];
        for (let i = 0; i < noOfSer; i++) {
            selectedValues.push(values[i]);
        }
        return selectedValues;
          
      }

      const setSerial = (serials) =>{
          const serialNoObj = JSON.parse(serials)
        //   setSerialNo([serialNoObj])

          const serialNumbers = getSerialNumbers(serialNoObj);
       
          setSerialArr(serialNumbers)
      }

    //   const setSerial = (serials) =>{

    //     const serialNoObj = JSON.parse(serials)
    //     setSerialNo([serialNoObj])
    //   }
      useEffect(() => {
    console.log(serialArr);
  }, [serialArr]);
  

  const serialList = () => {
      const serial = serialArr.map((serial)=>{
          return  <a class="dropdown-item" key={serial} onClick={()=>setSelectedSerial(serial)} href="#">{serial}</a>
      })

      return <div>{serial}</div>
      
  }
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
            <h1>Assets</h1>
          </div>
          <div className="col-sm-6">
            
            
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
                  Asset details
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
                      <th>Category</th>
                      <th>Manufacturer</th>
                      <th>Model</th>
                      <th>Serial No.</th>
                      <th>date purchased</th>
                      <th>quantity</th>
                      <th>cost(ETB)</th>
                      <th>assigned IDs</th>
                      {/* <th>amount assigned</th> */}
                    </tr>
                  </thead>
                  <tbody>
                  {
                      assets.map((value, key)=>{
                        return ( <tr key={value.id}>
                                 <td>{value.category}</td>
                                 <td>{value.manufacturer} </td>
                                 
                                 <td><button className='btn btn-link' 
                                      onClick={()=>{handleClick(value.id)
                                      setOpenModal(true)}}

                                      >{value.model}</button></td>
                                 <td>
                                 <div className="dropdown show">
                                    <a className="btn btn-link dropdown-toggle" onClick={()=>setSerial(value.serialNo)} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        serial NOs
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                       {serialList()}
                                       
                                    </div>
                                    </div>
                                     
                                     
                                 </td>
                                 <td>{value.datePurchased} </td>
                                 <td>{value.quantity} </td>
                                 <td>{value.cost} </td>
                                 <td>{value.assignedID} </td>
                                 <td><button className='btn btn-success'
                                 
                                  >More</button> </td>
                          
                               </tr>)
                      })
                    }
                   
                  
                  </tbody>
                </table>
                    {openModal && <Modal 
                    closeModal={setOpenModal}
                    modalInfo={selectedAsset}
                    selectedSerial={selectedSerial}/> }
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

export default Assets