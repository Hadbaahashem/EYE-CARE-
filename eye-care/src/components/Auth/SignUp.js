import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link ,json,useNavigate} from 'react-router-dom'
import "./SignUp.css"
import NavBar from './../Nav/NavBar';
import { toast } from 'react-toastify'


const SignUp = () => {
  const [name,namechange]=useState("");
  const [password,passwordchange]=useState("");
  const [email,emailchange]=useState("");
  
const navigate=useNavigate();
 
const IsValidate=()=>{
  let isproceed=true;
  let errormessage='Please enter the  '

  if(name === null ||name === ''){
    isproceed=false;
    errormessage +=' Username'
  }
  if(password === null ||password === ''){
    isproceed=false;
    errormessage +=' Password'
  }
  if(email === null ||email === ''){
    isproceed=false;
    errormessage +=' Email'
  }

  if(!isproceed){
    toast.warning(errormessage)
  }else{
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

    }else{
    isproceed=false;
    toast.warning('Please enter the valid email')
}
} 
  return isproceed;
}

const handlesubmit=(e)=>{
  e.preventDefault();
  let regobj={name,email,password};
  if(IsValidate()){

  fetch("http://localhost:8000/users",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(regobj)
  }).then((res)=>{
    toast.success('Registerd successfully.')
    sessionStorage.setItem('Username', name);
    navigate('/')
  }).catch((err)=>{
    toast.error('failed:'+err.message);
  });
}
}
        
  return (
   <div>
   <NavBar/>
   <form onSubmit={handlesubmit}>
    <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Sign Up</label>
            <input
              placeholder="User Name"
              type="text"
              className="form-control user-input mt-3 text-center mx-auto"
             value={name} onChange={e=>namechange(e.target.value)}
             
            />
            <input placeholder="Enter Email" type="text"  
            className="form-control user-input my-3 text-center mx-auto" 
            value={email} onChange={e=>emailchange(e.target.value)}
         
            />
            <input
              placeholder=" Enter Password"
              type="password"
              className="form-control user-input text-center mx-auto"
              value={password} onChange={e=>passwordchange(e.target.value)}
              
            />
            <button   type="submit" className="btn-login mx-auto mt-4">CREATE ACCOUNT</button>
            <label className="mx-auto my-4">
            Have an account already?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-primary">
                Log in
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

export default SignUp