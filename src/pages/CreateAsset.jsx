import {React, useState} from 'react'
import * as Yup from 'yup'
import {Formik, Form,ErrorMessage, Field, useFormik} from 'formik'
import axios from 'axios'

const CreateAsset = () => {



const [serialAmount, setSerialAmount] = useState()

const renderSerialFields = (amount) =>{
  let fields = []

  for(let i =0; i<amount; i++){
    fields.push( <div className="form-group">
    <label htmlFor="exampleInputEmail1">Serial No.</label>
     <ErrorMessage className='row col-sm-6 text-danger' name='serialNo' component="span"/>
    <Field
    name="serialNo"
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter..."
    />
    </div>)
    return fields
  }
}

// const onChange = () =>{
//   formik.handleChange()
//   setSerialAmount(formik.values.quantity)
// }




  const validationSchema = Yup.object().shape({
    category: Yup.string().required(),
    manufacturer: Yup.string().required(),
    model: Yup.string().required(),
    quantity: Yup.number().required().positive(),
    serialNo: Yup.string().required(),
    datePurchased: Yup.string().required(),
    cost: Yup.number().required().positive(),
    // image: Yup.mixed().required(),
    
  })
  const initialValues = {
    category: "",
    manufacturer: "",
    model: "",
    serialNo: "",
    quantity: "",
    datePurchased: "",
    cost:"",
    // image: "",
  }

  const formik = useFormik({
    initialValues
  })

  const handleSubmit = (values) => {
      console.log(values);
  }

   
  function convertStringToJSON(string) {
    // Split the string into a list of numbers.
    const numbers = string.split(' ');
  
    // Create a dictionary to store the JSON data.
    const jsonData = {};
  
    // Iterate over the list of numbers and add them to the dictionary with keys starting from one upto the length of the object.
    for (let i = 0; i < numbers.length; i++) {
      jsonData[i + 1] = numbers[i];
    }
  
    // Return the JSON object.
    return JSON.stringify(jsonData);
  }

  const onSubmit = (data) =>{
  
    
    const serials = data.serialNo
    
    const objSerials = convertStringToJSON(serials)
    
    
    const modifiedData = {
      ...data,
      serialNo: JSON.parse(objSerials)
      
    }
    console.log(modifiedData);
    
    axios.post("http://localhost:3000/assets", modifiedData).then((response) => {
      alert("asset registered successfully")
      console.log(response.data);
    })
    
  }

  console.log('Form values', formik.values);
  // setSerialAmount(formik.values.quantity)
  // console.log(serialAmount);
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
            <label>Category</label>
            <ErrorMessage className='row col-sm-6 text-danger' name='category' component="span"/>
            <Field
            name="category"
            
            
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label>Manufacturer</label>
             <ErrorMessage className='row col-sm-6 text-danger' name='manufacturer' component="span"/>
            <Field
            name="manufacturer"
              
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
          <div className="form-group">
            <label>Model No.</label>
             <ErrorMessage className='row col-sm-6 text-danger' name='model' component="span"/>
            <Field
            name="model"
              
              type="text"
              className="form-control"
              placeholder="Enter ..."
            />
          </div>

                        <div className="form-group">
            <label>Quantity</label>
             <ErrorMessage className='row col-sm-6 text-danger' name='quantity' component="span"/>
            <div className="input-group">
                <div className="input-group-prepend">
                
                </div>
                <Field id="quantity"
                type="number"
               name="quantity"
                  
                className="form-control"
                 placeholder='Enter...'
                //    value={formik.values.quantity}
                 />
            </div>
            {/* /.input group */}
            </div>

            

                    <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Serial No.</label>
             <ErrorMessage className='row col-sm-6 text-danger' name='serialNo' component="span"/>
            <Field
            name="serialNo"
              
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter..."
            />
            </div>
           
           
                {/* Date */}
                <div className="form-group">
                <label>Date purchased:</label>
                 <ErrorMessage className='row col-sm-6 text-danger' name='datePurchased' component="span"/>
                <div className="input-group date" id="reservationdate" data-target-input="nearest">
                    <Field
                    name="datePurchased"
                       type="date" className="form-control datetimepicker-input" data-target="#reservationdate" />
                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                    </div>
                </div>
                </div>
                </div>



        </div>
        <div className="col-sm-6">
            {/* other things on the side */}
            {/* <label>Condition</label>
        <select className="form-control select2" style={{width: '100%'}}>
            <option selected="selected">New</option>
            <option>Used</option>
            
            
        </select> */}
            <div className="form-group">
            <label>cost(ETB)</label>
             <ErrorMessage className='row col-sm-6 text-danger' name='cost' component="span"/>
            <Field
              type="number"
                
              id="cost"
               name="cost" 
               
              className="form-control"
              placeholder="Enter ..."
            />
          </div>
                {/* <div className="form-group">
                    <div className="form-group">
        <label htmlFor="exampleInputFile">Image</label>
        <div className="input-group">
            <div className="custom-file">
            <input type="file"
                   className="custom-file-input" 
                   id="exampleInputFile" 
                   onChange={(event) => {
                    setFieldValue("image", event.target.files[0]);
}}/>
            <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
            </div>
            <div className="input-group-append">
            <span className="input-group-text">Upload</span>
            </div>
        </div>
        </div>

        
            
            
        
        </div> */}

           
          <div className="form-group">
          <button className="btn btn-block btn-success" type="submit">Create Asset</button>

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

export default CreateAsset