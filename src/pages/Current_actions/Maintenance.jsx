import React from 'react'

const Maintenance = () => {
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
              
              <th>assets damaged</th>
              <th>maintenance reported date</th>
              <th>due date</th>
              <th>cost(ETB)</th>
              
             
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>dell inspiron 13</td>
              <td>jan 27, 2024</td>
              <td>mar 7, 2024</td>
              <td>3000</td>
             
              
              
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

export default Maintenance