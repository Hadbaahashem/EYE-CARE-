import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import'./DoctorView.css'
import { toast } from 'react-toastify';


function Create() {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        result:''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/patients', inputData)
        .then(res => {
            toast.success("Data Posted Successfully!")
            navigate('/doctorview')
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
         
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div className="form-group">
                <label htmlFor="status">Result</label>
                <select
                  name="Result"
                  onChange={e => setInputData({...inputData, result: e.target.value})} 
                   >
                <option> select..</option>
                <option value="Proliferative">Proliferative</option>
                <option value="Mild">Mild</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Severe">Severe</option>
                  <option value="None">None</option>

                </select>
              </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control'
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create