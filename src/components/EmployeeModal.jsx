import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import headshot from '../../img/user1-128x128.jpg'

const EmployeeModal = ({closeModal, modalInfo}) => {



    
  return (
    <div>
        <section className="content">
    {/* Default box */}
    <div className="card card-solid">
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                
              </div>
              <div className="card-body pt-0">
                <div className="row">
                    
                    
                    
                  <div className="col-7">
                    <h2 className="lead"><b>{modalInfo.category}</b></h2>
                    <p className="text-muted text-sm"><b>Full Name: </b>{modalInfo.firstname} {modalInfo.middlename} {modalInfo.lastname} </p>
                    <p className="text-muted text-sm"><b>Address: </b>{modalInfo.address} </p>
                    <p className="text-muted text-sm"><b>Email: </b> {modalInfo.email} </p>
                    <p className="text-muted text-sm"><b>phoneNo: </b>{modalInfo.phoneNo}</p>
                    <p className="text-muted text-sm"><b>department: </b> {modalInfo.department} </p>
                    <p className="text-muted text-sm"><b>room: </b> {modalInfo.room} </p>
                              
                  </div>
                   


                  <div className="col-5 text-center">
                  <button className="btn btn-link text-center"
                   onClick={()=>closeModal(false)} 
                   type="button ">X</button>
                    <img src={headshot} alt="user-avatar" className="img-circle img-fluid" />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default EmployeeModal