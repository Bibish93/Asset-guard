import React from 'react'

const Assets = () => {
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
                      <th>Name</th>
                      <th>Model</th>
                      <th>serial no</th>
                      <th>quantity</th>
                      <th>amount available </th>
                      <th>amount assigned</th>
                      <th>date purchased</th>
                      <th>cost(ETB)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>laptop</td>
                      <td>HP probook</td>
                      <td>FG445s</td>
                      <td>13</td>
                      <td>7</td>
                      <td>6</td>
                      <td>dec 21, 2020</td>
                      <td>15500</td>
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

export default Assets