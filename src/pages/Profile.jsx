import React from 'react'

const Profile = () => {
  return (
    <div>

        
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Contacts</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Contacts</li>
          </ol>
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
                Full-stack Engineer
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead"><b>Dagim Debebe Habte</b></h2>
                    <p className="text-muted text-sm"><b>About: </b> Frontend developer/ Backend Developer / </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Addis Ababa, Yeka Karalo st.</li>
                      <li className="small"><span className="fa-li"><i className="fas fa-lg fa-book" /></span> Department: IT</li>
                      <li className="small"><span className="fa-li"><i className="fas fa-lg fa-user" /></span> Role: Admin</li>
                      <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: +251922826240</li>
                      <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Email: dagi19deb@gmail.com </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid" />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
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

export default Profile