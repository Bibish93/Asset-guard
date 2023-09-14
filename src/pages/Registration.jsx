import React from 'react'

const Registration = () => {
  return (
    <div>
        
         {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Register Employees</h1>
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
        <div className="card card-warning">
  {/* <div className="card-header">
    <h3 className="card-title">General Elements</h3>
  </div> */}
  {/* /.card-header */}
  <div className="card-body">
    <form>
      <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
            />
            </div>

                        <div className="form-group">
            <label>Phone no</label>
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-phone" /></span>
                </div>
                <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
            </div>
            {/* /.input group */}
            </div>
                        <div className="form-group">
            <label>Address</label>
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-lg fa-building" /></span>
                </div>
                <input type="text" className="form-control" />
            </div>
            {/* /.input group */}
            </div>

                    <div>
           
           
                {/* Date */}
                <div className="form-group">
                <label>Date joined:</label>
                <div className="input-group date" id="reservationdate" data-target-input="nearest">
                    <input type="date" className="form-control datetimepicker-input" data-target="#reservationdate" />
                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                    </div>
                </div>
                </div>
                </div>



        </div>
        <div className="col-sm-6">
            {/* other things on the side */}
            <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
            <div className="form-group">
            <label>Room</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
                <div className="form-group">
        <label>Role</label>
        <select className="form-control select2" style={{width: '100%'}}>
            <option selected="selected">Employee</option>
            <option>Admin</option>
            
            
        </select>
        </div>

            <div className="form-group">
            <label>Create new password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
            <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
          <button className="btn btn-block btn-success" type="button">Create Account</button>

          </div>

        </div>
      </div>
     
    </form>
  </div>
  {/* /.card-body */}
</div>

    </div>
    </div>
  )
}

export default Registration