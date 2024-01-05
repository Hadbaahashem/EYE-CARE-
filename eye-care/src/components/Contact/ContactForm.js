import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Fade, Slide } from 'react-reveal';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const form = useRef();

  const handleChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();

    if (name.length === "") {
      setShow(false);
      return;
    }

    emailjs.sendForm('service_13x7qno', 'template_inew30c', form.current, 'Y09yKg4_F2AU_Z4rp')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!');
        setName("");
        setUserEmail("");
        setPhoneNumber("");
        setMessage("");
        }, (error) => {
        console.log(error.text);
        toast.error('Failed to send email. Please try again.');
      });
    setShow(true);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="main-heading">
        <Fade>
          <h1>Contact Us</h1>
          </Fade>
          <Slide  bottom delay={200}>
          <div className="content">
            <form ref={form} onSubmit={formHandler}>
              <input className="main-input" placeholder="Name" onChange={(event) => handleChange(event, setName)}
              value={name} required />
              {!show && <p className="p">Name cannot be empty</p>}
              <input className="main-input" placeholder="Email" name="user_email" onChange={(event) => handleChange(event, setUserEmail)}
              value={userEmail} required />
              <input className="main-input" placeholder="Mobile Number" name="phone_number" onChange={(event) => handleChange(event, setPhoneNumber)}
               value={phoneNumber} required />
              <textarea className="main-input" placeholder="Message" name="message" rows="4"  onChange={(event) => handleChange(event, setMessage)}
              value={message} required></textarea>
              <input className="submit" type="submit" value="Submit" />
            </form>
            <Slide right delay={300}>
            <Fade >
            <div className="info">
              <h4>Get In Touch</h4>
              <span className="phone">+00 123-456-789</span>
              <span className="phn">+00 123-456-789</span>
              <h4>Where We Are</h4>
              <address className="address">Address 17 <br />New York, NYC<br />123-4560-789<br />USA</address>
            </div>
            </Fade>
            </Slide>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
