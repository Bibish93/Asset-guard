import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeModal from '../components/EmployeeModal'

const Employees = () => {
  
  // const navigate = useNavigate()
  
  
  // const handleProfile = (id) => {
    
    //   navigate(`employee/${id}`)
    

    // }

  const [employees, setEmployees] = useState([])
  const [openModal, setOpenModal] = useState(false)
  
   
  
  
  useEffect(()=>{
    axios.get("http://localhost:3000/register").then((response)=>{
      setEmployees(response.data)
      console.log(employees);
    })
  },[])
  
  
  const [selectedUser, setSelectedUser] = useState(null)
  
  const handleClick = (id) =>{
      const selectedUser = employees.find((user) => user.id === id)
      setSelectedUser(selectedUser)
      // console.log(selectedUser);
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
                <h1>Employees</h1>
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
                      Employee details
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
                          <th>Email</th>
                          <th>Phone no</th>
                          <th>Address</th>
                          <th>department</th>
                          <th>Room</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          employees.map((value, key)=>{
                            return ( <tr key={value.id}
                            // onClick={handleProfile(value.id)}
                            >
                                     <td><button className='btn btn-link' 
                                      onClick={()=>{handleClick(value.id)
                                      setOpenModal(true)}}

                                      >{value.firstname} {value.middlename} {value.lastname}</button></td>
                                     <td>{value.email} </td>
                                     <td>{value.phoneNo} </td>
                                     <td>{value.address} </td>
                                     <td>{value.department} </td>
                                     <td>{value.room} </td>
                                     <td>{value.Role} </td>
                                     {/* <td><button className='btn btn-primary'>more</button> </td> */}
                              
                                   </tr>)
                          })
                        }
                       
                        
                       
                       
                      </tbody>
                    </table>
                    {
                      openModal && <EmployeeModal 
                      closeModal={setOpenModal}
                      modalInfo={selectedUser}
                      /> 
                    }
                   
                      
                  </div>
                  </div>
                  </div>
            </div>
          </div>
        </section>
        
      </div>
    
    
    </>
    
    )
        </div>
      )
  

    
 
}

export default Employees