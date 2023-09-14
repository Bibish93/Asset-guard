import React from 'react'

const Employees = () => {
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
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">employees</li>
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
                      <th>department</th>
                      <th>Room</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dagim Debebe Habte</td>
                      <td>dagi19deb@gmail.com</td>
                      <td>+251922826240</td>
                      <td>finance</td>
                      <td>107</td>
                      <td>Admin</td>
                    </tr>
                    <tr>
                      <td>Kaleab Bekele W/michael</td>
                      <td>kaleab266@gmail.com</td>
                      <td>+251906262822</td>
                      <td>finance</td>
                      <td>108</td>
                      <td>Admin</td>
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

export default Employees