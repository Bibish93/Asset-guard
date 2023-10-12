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
    const [employees, setEmployees] = useState([])
    
    const [selectedUser, setSelectedUser] = useState(null)
    
    const [checkoutDetail, setCheckoutDetail] = useState({})
    const [reserveDetail, setReserveDetail] = useState({})

    // const [isVisible, setIsVisible] = useState(false)
    
    
    
    const [checkouts, setCheckouts] = useState([])

    const [date, setDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState("")

    const handleChange = (event) => {
      
     setFormattedDate(()=>event.target.value)
    //  setReserveDetail(prevReserveDetail => (
    //   {
    //     ...prevReserveDetail,
    //     ReservationDate: formattedDate
    //   }
    // ))
    setReserveDetail(prevReserveDetail => {
      return {
        ...prevReserveDetail,
        ReservationDate: event.target.value,
      };
    });
    console.log(reserveDetail);


     
      
    };


    useEffect(() => {
      console.log(formattedDate);
    }, [formattedDate]);

    useEffect(() => {
      axios.get("http://localhost:3000/register").then((response)=>{
        setEmployees(response.data)
        console.log(employees);
      })
  
  
      axios.get("http://localhost:3000/assets").then((response)=>{
        setAssets(response.data)
        console.log(assets);
      })
      




     }, []);


     


    

     const sendCheckoutDetail = async () => {
       
      await axios.post("http://localhost:3000/assets/associate", checkoutDetail
   ).then((response) => {
        alert("asset assigned sucessfully")
        console.log(response.data);
      })
     }
   
     const sendReserveDetail = async () => {
       
      await axios.post("http://localhost:3000/assets/reserve", reserveDetail
   ).then((response) => {
        alert("asset reserved sucessfully")
        console.log(response.data);
      })
     }
   



      const [selectedAsset, setSelectedAsset] = useState(null)
  
      const handleClick = (id) =>{
          const selectedAsset = assets.find((asset) => asset.id === id)

          setSelectedAsset(selectedAsset)
          // console.log(selectedUser);
      }


      const handleReserve = (id) => {
                                            
        setReserveDetail(prevReserveDetail => (
          {
            ...prevReserveDetail,
            userId: id
          }
        ))
        console.log(reserveDetail);
        
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

      const handleClickEmp = (id) =>{
        const selectedUser = employees.find((user) => user.id === id)
        setSelectedUser(selectedUser)
        // console.log(selectedUser);
    }

    //   const setSerial = (serials) =>{

    //     const serialNoObj = JSON.parse(serials)
    //     setSerialNo([serialNoObj])
    //   }
      useEffect(() => {
    console.log(serialArr);
  }, [serialArr]);
  

  const serialList = (id) => {
      const serial = serialArr.map((serial)=>{
          return  <a class="dropdown-item" key={serial} onClick={()=>{
            setSelectedSerial(serial)
            setCheckoutDetail(prevCheckoutDetail => (
              {
                ...prevCheckoutDetail,
                assetId: id,
                serialNo: serial
              }
            ))
            // console.log("checkout ", checkoutDetail);
            setReserveDetail(prevReserveDetail => (
              {
                ...prevReserveDetail,
                assetId: id,
                serialNo: serial

              }
            ))
            console.log("reserve ",reserveDetail);

          }} 
          href="#">
            {serial}
          </a>
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
                      <th>actions</th>
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
                                      setOpenModal(true)
                                    setSelectedSerial(null)}}

                                      >{value.model}</button></td>
                                 <td>
                                 <div className="dropdown show">
                                    <a className="btn btn-link dropdown-toggle" onClick={()=>setSerial(value.serialNo)} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        serial NOs
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                       {serialList(value.id)}
                                       
                                    </div>
                                    </div>
                                     
                                     
                                 </td>
                                 <td>{value.datePurchased} </td>
                                 <td>{value.quantity} </td>
                                 <td>{value.cost} </td>
                                  {/* <td>
                                    <RowComponent />
                                  </td> */}



<td>
                                   <div className="row">


                                   
                                 <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     select employee
                                    </button>
                                    <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                    {
                                      employees.map((value) => {
                                        return(
                                          <a key={value.id} onClick={() => {
                                            
                                            setCheckoutDetail(prevCheckoutDetail => (
                                              {
                                                ...prevCheckoutDetail,
                                                userId: value.id
                                              }
                                            ))
                                            handleReserve(value.id)
                                            console.log("reserve", reserveDetail);
                                            // console.log(checkoutDetail);
                                            
                                          }
                                            

                                            
                                          }  
                                          class="dropdown-item" 
                                          href="#">{value.firstname} {value.middlename} {value.lastname}
                                          </a>
                                         
                                          )
                                        })
                                      }
                                      </div>

                                      <button type="button" onClick={sendCheckoutDetail} className="btn btn-success  ">Checkout</button>
                                  

                                      
                                   
                                    {/* <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Delete
                                    </button> */}
                                    {/* <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                    {
                                      employees.map((value) => {
                                        return(
                                          <a key={value.id} class="dropdown-item" href="#">{value.firstname} {value.middlename} {value.lastname}</a>
                                         
                                          )
                                        })
                                      }
                                      </div> */}
                                   
                                  </div>

                                  </div>
                                                                    <div className="row">
                                    <div className="col-sm-12">
                                      <div className="btn-group ">
                                        {/* <button type="button" onClick={sendCheckoutDetail} className="btn btn-success  mt-3 mr-3">Checkout</button> */}
                                      <div className="input-group mt-3 ">
                                    {/* <div className="dropdwon">

                                  <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Reserve to
                                  </button>
                                  <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                  {
                                    employees.map((value) => {
                                      return(
                                        <a key={value.id} 
                                        // onClick={handleReserve(value.id) }                              
                                        class="dropdown-item" 
                                        href="#">{value.firstname} {value.middlename} {value.lastname}
                                        </a>

                                        
                                      
                                        )
                                      })


                                    }

                                    
                                    </div>

                                  </div> */}
                                    <input type="date" className="form-control datetimepicker-input" onChange={handleChange} id="inputGroupSelect04" />
                                    <div className="input-group-append">
                                        <button type="button" onClick={sendReserveDetail} className="btn btn-success">Reserve</button>

                                    </div>
                                  </div>

                                        {/* <button type="button" onClick={sendCheckoutDetail} className="btn btn-success  mt-3 mr-3">Button 6</button> */}
                                      </div>
                                    </div>
                                  </div>

                                 </td>





                                 
                          
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