import React from 'react'
import {useParams} from 'react-router'


const Employee = () => {

    let {id} = useParams()
    console.log(id)
  return (
    <div>

        <p>{id}</p>
        <h1>hellp</h1>
        
    </div>
  )
}

export default Employee