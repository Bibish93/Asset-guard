import React from 'react'
import { Link } from 'react-router-dom'
const ByEmployee = () => {
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
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item">
        
      </li>
      <li className="breadcrumb-item active"></li>
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
              <th>assets under possession</th>
              
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/profile">Dagim Debebe</Link></td>
              <td>Engineering</td>
              <td><select className="form-control select2" style={{width: '100%'}}>
            <option selected="selected">Hp probook 650</option>
            <option>dell inspiron 13</option>
            
            
        </select></td>
              
              
            </tr>
           
           
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