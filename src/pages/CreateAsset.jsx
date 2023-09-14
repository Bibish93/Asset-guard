import React from 'react'

const CreateAsset = () => {
  return (
    <div>

        
         {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Create Asset</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active"></li>
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
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label>Manufacturer</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label>Model No.</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Serial No.</label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter..."
            />
            </div>

                        <div className="form-group">
            <label>Quantity in stock</label>
            <div className="input-group">
                <div className="input-group-prepend">
                
                </div>
                <input  id="quantity"
               name="quantity" 
               min="1"
               max="1000000000000"
                className="form-control"
                 placeholder='Enter...'/>
            </div>
            {/* /.input group */}
            </div>

                    <div>
           
           
                {/* Date */}
                <div className="form-group">
                <label>Date purchased:</label>
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
            <label>Condition</label>
        <select className="form-control select2" style={{width: '100%'}}>
            <option selected="selected">New</option>
            <option>Used</option>
            
            
        </select>
            <div className="form-group">
            <label>cost(ETB)</label>
            <input
              type="number"
              id="quantity"
               name="quantity" 
               min="1"
               max="1000000000000"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
                <div className="form-group">
                    <div className="form-group">
        <label htmlFor="exampleInputFile">Image</label>
        <div className="input-group">
            <div className="custom-file">
            <input type="file" className="custom-file-input" id="exampleInputFile" />
            <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
            </div>
            <div className="input-group-append">
            <span className="input-group-text">Upload</span>
            </div>
        </div>
        </div>

        
            
            
        
        </div>

           
          <div className="form-group">
          <button className="btn btn-block btn-success" type="button">Create Asset</button>

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

export default CreateAsset