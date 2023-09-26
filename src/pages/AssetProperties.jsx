import React from 'react'
import laptop from '../../img/laptop.jpg'
import { Link } from 'react-router-dom'
const AssetProperties = () => {
  return (
    <div>
                
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Asset Detail</h1>
        </div>
        <div className="col-sm-6">
         
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
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
                  
      
      
                    <h2 className="lead"><b>HP Probook 650 G1</b></h2>
                    <p className="text-muted text-sm"><b>Manufacturer: </b> HP/ Backend Developer / </p>
                    <p className="text-muted text-sm"><b>Serial no: </b> 31F7g99 </p>
                    <p className="text-muted text-sm"><b>Asset ID: </b> LP0001 </p>
                    <p className="text-muted text-sm"><b>Purchase Date: </b>dec 21, 2020</p>
                    <p className="text-muted text-sm"><b>Model: </b>Probook 650 G1 </p>
                    <p className="text-muted text-sm"><b>Cost(ETB): </b>15500 </p>
                    <p className="text-muted text-sm"><b>Current Employee: </b><Link to="/profile">Dagim Debebe</Link></p>
                    
                  </div>
                  <div className="col-5 text-center">
                 
                    <img src={laptop} alt="user-avatar" className="img-circle img-fluid" />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
    </div>
  )
}

export default AssetProperties