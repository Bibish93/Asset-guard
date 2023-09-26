import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import laptop from '../../img/laptop.jpg'
const Modal = ({closeModal, modalInfo, selectedSerial}) => {
    
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
                    <p className="text-muted text-sm"><b>Manufacturer: </b>{modalInfo.manufacturer} </p>
                    <p className="text-muted text-sm"><b>Model: </b>{modalInfo.model} </p>
                    <p className="text-muted text-sm"><b>Serial no: </b> {selectedSerial} </p>
                    <p className="text-muted text-sm"><b>Purchase Date: </b>{modalInfo.datePurchased}</p>
                    <p className="text-muted text-sm"><b>Quantity: </b> {modalInfo.quantity} </p>
                    <p className="text-muted text-sm"><b>Cost(ETB): </b>{modalInfo.cost} </p>
                    <p className="text-muted text-sm"><b>Current Employee: </b><Link to="/profile">Dagim Debebe</Link></p>
                            
                  </div>
                   


                  <div className="col-5 text-center">
                  <button className="btn btn-link text-center"
                   onClick={()=>closeModal(false)} 
                   type="button ">X</button>
                    <img src={laptop} alt="user-avatar" className="img-circle img-fluid" />
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

export default Modal