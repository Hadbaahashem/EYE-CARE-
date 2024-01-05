import React from 'react';
import { Fade, Slide } from 'react-reveal';
import './AboutUs.css';
import NavBar from './../Nav/NavBar';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="row p-5">
        <div className="col-lg-6 my-6">
          <div className="about-container">
            <Fade bottom delay={200}>
              <p className="subheader">ABOUT US </p>
              <Slide bottom delay={300}>
                <h2 className="org">The Best Detection Starts Here!</h2>
              </Slide>
              <Slide bottom delay={400}>
                <p className='description'>We, Diabetic Retinopathy Clinic, situated at , are a super speciality eye hospital providing a
                  wide range of complete eye treatments under one roof. Our motto is to provide best,
                  comprehensive and affordable eye care with the latest comprehensive technologies.
                  We are committed to achieving and maintaining excellence in eye care. Our dedicated team of
                  specialist doctors cater to all eye diseases from corneal pole to retinal pole of the eyeball
                  and take care of pediatric to geriatric eye services. A full array of state-of-the-art equipment and a high safety environment
                  enables our doctors to diagnose and treat eye problems accurately, safely and effectively.
                  With a focus on providing the best eye care treatment, our eye hospital has always been on preventive ophthalmology, and hence our activities
                  are focused on information, education, and informed consent at every step. We stand for a healthy vision of life.
                  We are always abreast with the latest and newest in technology wherever required with patient satisfaction and quality of services
                  being our priority.</p>
              </Slide>
            </Fade>
          </div>
        </div>
        <div className="col-lg-6 my-6">
          <Fade right delay={500}>
            <img className="img" src="https://onecms-res.cloudinary.com/image/upload/s--1gjNcdXP--/c_crop,h_1414,w_1885,x_97,y_-1/c_fill,g_auto,h_523,w_693/f_auto,q_auto/v1/mediacorp/cna/image/2021-09/istock-908664360.jpg?itok=zCa8XRjg" alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
