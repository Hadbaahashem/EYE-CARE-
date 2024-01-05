import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



function Update() {

    const { id } = useParams();
    const [inputData, setInputData] = useState({
      id: id,
      name: '',
      email: '',
      result: ''
    });
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get(`http://localhost:8000/patients/${id}`)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err));
    }, [id]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`http://localhost:8000/patients/${id}`, inputData)
        .then(res => {
          toast.success('Data Updated Successfully!');
          navigate('/doctorview');
        })
        .catch(error => {
          toast.error('Error updating data');
          console.error(error);
        });
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div className="form-group" >
                <label htmlFor="status">Result</label>
                <select name="Result" value={inputData.result}
                  onChange={e => setInputData({...inputData, result: e.target.value})} 
                   >
                  <option> select..</option>
                  <option value="Mild">Mild</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Severe">Severe</option>
                  <option value="None">None</option>

                </select>
              </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' value={inputData.email}
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update