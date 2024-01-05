import {Container}from 'react-bootstrap'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home.js/Home';
import React, { useState } from "react";
import AboutUs from './components/About/AboutUs';
import DoctorCard from './components/Doctors/DoctorCard';
import Contact from './components/Contact/Contact';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import GalleryCard from './components/Gallery/GalleryCard';
import Login from './components/Auth/Login';
import Footer from './components/Footer/Footer';
import SignUp from './components/Auth/SignUp';
import Appointment from './components/Appointment/Appointment';
import Detection from './components/Detection/Detection';
import { eye } from "./data";
import DoctorView from './components/DoctorView/DoctorView';
import Service from './components/ServiceCard/Service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [eyeData, setEyeData] = useState(eye )
  
 return (
    <div>
    <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/doctors" element={<DoctorCard/>}/>
        <Route path="/gallery" element={<GalleryCard/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/login" element={<Login />} />
         <Route path="/Appointment" element={<Appointment />} />
         <Route path="/detection" element={<Detection />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path='/doctorview' element={<DoctorView />}></Route>
         <Route path='/service' element={<Service/>}></Route>

     </Routes>
     
    </BrowserRouter>
    <Footer/>
      
    </div>
  );
}

export default App;
