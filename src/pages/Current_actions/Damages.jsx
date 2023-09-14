import React from 'react'
import { Link } from 'react-router-dom'
const Damages = () => {
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
    <h1>Damages reported</h1>
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
          Damages
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
              <th>Reported by</th>
              <th>Department</th>
              <th>assets damaged</th>
              <th>date reported</th>
              <th>damage level </th>
              <th>Action</th>
              
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/profile">Dagim Debebe</Link></td>
              <td>Engineering</td>
              <td>dell inspiron 13</td>
              <td>jan 27, 2024</td>
              <td><select className="form-control select2" style={{width: '100%'}}>
            <option selected="selected">minor</option>
            <option>medium</option>
            <option>severe</option>
            <option>permanent</option>
            
            
        </select></td>
              <td className='d-flex .align-items-md-center'><button className="btn ml-15 btn-danger" type="button">dispose</button><button className="btn  btn-primary" type="button">report for maintenance</button></td>
              
              
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

export default Damages