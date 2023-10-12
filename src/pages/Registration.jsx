import React from 'react'
import {useState} from 'react'
import {Formik, Form, Field, useFormik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


const Registration = () => {


  


  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    middlename: Yup.string().required(),
    lastname: Yup.string().required(),
    phoneNo: Yup.number().min(12).required(),
    password: Yup.string().min(8).required(),
    address: Yup.string().required(),
    department: Yup.string().required(),
    room: Yup.number().positive().required(),
    // role: Yup.string().required(),
    email: Yup.string().required(),
  })
  const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    phoneNo: "",
    address: "",
    department: "",
    room:"",
    
  }

  const onSubmit = (data) =>{
    axios.post("http://localhost:3000/register", data).then((response) => {
      alert("user registration successful");
    })
    

    
  }

  const formik = useFormik({
    initialValues
  })



  console.log('Form values', formik.values);

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
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

    <Form>
      <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>First Name</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='firstname' component="span"/>
            <Field 
              id='firstName'  
              name='firstname' 
              // onChange={formik.handleChange}
              // value={formik.values.firstname} 
              type="text"
              className="form-control"
              placeholder="Enter ..."
              // onChange={
              //   (e) =>{
              //     const firstName = e.target.value
              //     setFirstName(firstName)
              //   }
              // }
              
            />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='middlename' component="span"/>
            <Field 
              id="middleName"
              name='middlename' 
              type="text"
              className="form-control"
              placeholder="Enter ..."
              // onChange={
              //   (e) =>{
              //     const midName = e.target.value
              //     setMiddleNameReg(midName)
              //   }
              // }
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='lastname' component="span"/>
            <Field 
              name='lastname' 
              id='lastname' 
              type="text"
              className="form-control"
              placeholder="Enter ..."
              // onChange={
              //   (e) =>{
              //     const lastName = e.target.value
              //     setLastNameReg(lastName)
              //   }
              // }
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='email' component="span"/>
            <Field 
              name='email' 
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                // onChange={
                //   (e) =>{
                //     const email = e.target.value
                //     setEmailReg(email)
                //   }
                // }
            />
            </div>

                        <div className="form-group">
            <label>Phone no</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='phoneNo' component="span"/>
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-phone" /></span>
                </div>
                <Field 
                  name='phoneNo'  type="text"
                  id='phoneNo' 
                 className="form-control"
                //  onChange={
                //   (e) =>{
                //     const phone = e.target.value
                //     setPhoneNoReg(phone)
                //   }
                // }
                  data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
            </div>
            {/* /.input group */}
            </div>
                        <div className="form-group">
            <label>Address</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='address' component="span"/>
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-lg fa-building" /></span>
                </div>
                <Field 
                  name='address'  type="text"
                  id='address' 
                 className="form-control"
                 />
            </div>
            {/* /.input group */}
            </div>

                    
           
           
                {/* Date */}
                <div className="form-group">
                <label>Date joined:</label>
                <ErrorMessage className='row col-sm-6 text-danger' name='dateJoined' component="span"/>
                <div className="input-group date"
                 id="reservationdate"
                 onChange={
                  (e) =>{
                    const date = e.target.value
                    setDateJoinedReg(date)
                  }
                }
                  data-target-input="nearest">
                    <Field name='dateJoined' type="date" className="form-control datetimepicker-input" data-target="#reservationdate" />
                     <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                    </div>
                </div>
                </div>
                



        </div>
        <div className="col-sm-6">
            {/* other things on the side */}
            <div className="form-group">
            <label>Department</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='department' component="span"/>
            <Field 
              name='department' 
              id='department' 
              type="text"
              className="form-control"
              placeholder="Enter ..."
              // onChange={
              //   (e) =>{
              //     const department = e.target.value
              //     setDepartmentReg(department)
              //   }
              // }
            />
          </div>
            <div className="form-group">
            <label>Room</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='room' component="span"/>
            <Field 
              name='room' 
              id='room' 
              type="text"
              className="form-control"
              placeholder="Enter ..."
              // onChange={
              //   (e) =>{
              //     const room = e.target.value
              //     setRoomReg(room)
              //   }
              // }
            />
          </div>
                <div className="form-group">
        <label>Role</label>
        <select className="form-control select2" 
             style={{width: '100%'}}>
            <option selected="selected">Employee</option>
            <option>Admin</option>
            
            
        </select>
        </div>

            <div className="form-group">
            <label>Create new password</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='password' component="span"/>
            <Field 
              name='password' 
              id='password' 
              type="password"
              className="form-control"
              placeholder="Enter ..."
              // onChange={
              //   (e) =>{
              //     const password = e.target.value
              //     setPasswordReg(password)
              //   }
              // }
            />
          </div>
            {/* <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter ..."
            />
          </div> */}
          <div className="form-group">
          {/* <button className="btn btn-block btn-success" type="submit">Create Account</button> */}
          <button className='btn btn-primary' type='submit'>create account</button>
          </div>

        </div>
      </div>
     
    </Form>
    </Formik>
  </div>
  {/* /.card-body */}
</div>

    </div>
    </div>
  )
}

export default Registration