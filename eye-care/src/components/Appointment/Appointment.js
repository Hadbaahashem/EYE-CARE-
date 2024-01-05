import React, { useState } from 'react';
import './Appointment.css';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import NavBar from '../Nav/NavBar';

const Appointment = () => {
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const serviceId = 'service_5ag9kow';
    const templateId = 'template_w24k344';
    const userId = 'Y09yKg4_F2AU_Z4rp';

    const period = parseInt(time.split(':')[0]) < 12 ? 'AM' : 'PM';


    const templateParams = {
      to_name: 'EYE CARE',
      from_name: email,
      department: department, 
      doctor: doctor, 
      name: name,
      email: email,
      date: date,
      time: `${time} ${period}`,
    };
   
    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast.success('Email sent successfully!');
      setName("");
      setEmail("");
      setDepartment("");
      setDoctor("");
      setTime("");
      setDate("")

    } catch (error) {
      toast.error('Failed to send email. Please try again.');
    }
  };
  
  return (
    <div>
      <NavBar />
      <div className="container-fluid py-5">
        <div className="container mt-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-5">
                <h5 className="d-inline-block text-primary text-uppercase ">Appointment</h5>
                <h1 className="display-4">Make An Appointment</h1>
              </div>
              <p className="mb-5">
                Early detection of retinal abnormalities has a potential of diabetes prevention,
                besides being essential in preventing the progression of DR and/or diabetic macular
                edema (DME), along with other complications that could lead to loss of vision.
                Current DR screening methods utilize retinal fundus imaging and manual assessment.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light text-center rounded p-5">
                <h1 className="mb-5 mt-5">Book An Appointment</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mt-5 mb-5">
                    <div className="col-12 col-sm-6">
                    <select
                    className="form-select bg-white border-0"
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department}
                  >
                    <option value="" disabled defaultValue>
                      Choose Department
                    </option>
                    <option value="Retinal surgery">Retinal exam</option>
                    <option value="Department 2">Retinal surgery</option>
                  </select>
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                    <select
                    className="form-select bg-white border-0"
                    onChange={(e) => setDoctor(e.target.value)}
                    value={doctor}
                  >
                    <option value="" disabled defaultValue>
                      Select Doctor
                    </option>
                    <option value="Dr. Harsy Backley">Dr. Harsy Backley</option>
                    <option value="Dr. Anna Winds">Dr. Anna Winds</option>
                    <option value="Dr. Nick Leng">Dr. Nick Leng</option>
                  </select>
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                      <div className="date" id="date" data-target-input="nearest">
                        <input
                          type="date"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Date"
                          data-target="#date"
                          data-toggle="datetimepicker"
                          onChange={(e) => setDate(e.target.value)}
                          value={date}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                      <div className="time" id="time" data-target-input="nearest">
                        <input
                          type="time"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Time"
                          data-target="#time"
                          data-toggle="datetimepicker"
                          onChange={(e) => setTime(e.target.value)}
                          value={time}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Make An Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
