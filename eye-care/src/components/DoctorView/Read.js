import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../Nav/NavBar'
function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/patients/'+id)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <div>
    <NavBar/>
    <div className='container mt-5'>
        
            <div className='container p-5'>
            <p>{Data.id}</p>
            <p>{Data.name}</p>
            <p>{Data.result}</p>
            <p>{Data.email}</p>
             
              <a href='/doctorview'>
            <button className='text-decoration-none btn btn-sm btn-primary' >Back</button>
            </a>
            </div>
    </div>
    </div>
  )
}

export default Read