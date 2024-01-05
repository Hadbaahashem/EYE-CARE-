import React, { useState , useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Login.css"
import NavBar from './../Nav/NavBar';
import { toast } from 'react-toastify'

const Login = () => {

    const [formData, setFormData] = useState({
		email: '',
		password: '',
    name:''
	})
  const navigate = useNavigate()
  useEffect(()=>{
    sessionStorage.clear();
        },[]);
    

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.email === "" || formData.email === null) {
      toast.warning('Email required');

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    toast.warning('Please enter the valid email')
    }

    if (formData.password === "" || formData.password === null) {
      toast.warning('Password required');

    } else if (formData.password.length < 6) {
      toast.warning('Password length should be at least 6 characters');
    }


    axios.get('http://localhost:8000/users')
      .then(result => {
        const foundUser = result.data.find(user => user.email === formData.email);

        if (foundUser) {
          if (foundUser.password === formData.password) {
            toast.success("Login successfully");
            sessionStorage.setItem('User', JSON.stringify(foundUser));
            if (foundUser.role === 'doctor') {
              // Redirect to the doctor's page
              navigate('/');
            } else {
              // Redirect to the patient's page
              navigate('/');
            }         
           } else {
            toast.warning('Wrong Password');
          }
        } 
        else{
          toast.warning('User Not Found');
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
    <NavBar/>
    <form onSubmit={handleSubmit} >
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Sign In</label>
            <input placeholder="Enter Email"
            type="text"
            className="form-control user-input my-3 text-center mx-auto"
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
          />
            <input
                placeholder="Enter Password"
                type="password"
                className="form-control user-input text-center mx-auto"
                onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                  }
                />
            <button type="submit"  className="btn-login mx-auto mt-4">LOG IN</button>
            <label className="mx-auto my-4">
                       Don't have an account? {" "}
                <Link to="/signup" style={{textDecoration:'none'}}>
                    <span style={{ cursor: "pointer" }} className="text-primary">
                    Sign Up
                    </span>
                </Link>
            </label>
        </Col>
    </Row>
</Container>
</form>
</div>
)
}

export default Login