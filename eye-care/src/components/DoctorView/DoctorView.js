import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import { Modal, Button, Form } from 'react-bootstrap';
import './DoctorView.css';

const DoctorView = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {
    loadPatients();
  }, [query]);

  const loadPatients = async () => {
    let endpoint = 'http://localhost:8000/patients';
    if (query) {
      endpoint += `?q=${query}`;
    }
    try {
      const result = await axios.get(endpoint);
      setPatients(result.data.reverse());
    } catch (error) {
      console.error('Error loading patients:', error);
    }
  };

  const handleAddPatient = () => {
    axios
      .post('http://localhost:8000/patients', { name, result, email })
      .then((response) => {
        setPatients([...patients, response.data]);
        handleCloseModal();
      })
      .catch((error) => console.error('Error adding patient:', error));
  };

  const handleUpdatePatient = () => {
    axios
      .put(`http://localhost:8000/patients/${selectedPatient.id}`, { name, result, email })
      .then((response) => {
        setPatients((prevPatients) =>
          prevPatients.map((patient) => (patient.id === selectedPatient.id ? response.data : patient))
        );
        handleCloseModal();
      })
      .catch((error) => console.error('Error updating patient:', error));
  };

  const handleDeletePatient = (id) => {
    axios
      .delete(`http://localhost:8000/patients/${id}`)
      .then(() => {
        setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
      })
      .catch((error) => console.error('Error deleting patient:', error));
  };

  const handleShowModal = (patient) => {
    if (patient) {
      setSelectedPatient(patient);
      setName(patient.name);
      setResult(patient.result);
      setEmail(patient.email);
    } else {
      setSelectedPatient(null);
      setName('');
      setResult('');
      setEmail('');
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
    setShowModal(false);
    setName('');
    setResult('');
    setEmail('');
  };
  const user = JSON.parse(sessionStorage.getItem('User'));
  const userRole = user?.role;
  useEffect(() => {
    if (userRole !== 'doctor') {
      navigate('/'); // Redirect to the home page or another appropriate page
    }
  }, [userRole, navigate]);
  return (
    <div>
      <NavBar />
      <div className="doctor-view-container">
      <h2>Patients List</h2>
        <div className="add-patient-container">
          <Button className="add-patient-button" onClick={() => handleShowModal(null)}>
            Add Patient +
          </Button>
        </div>
        <div className="search-container">
          <input
            className="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Result</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, i) => (
              <tr key={patient.id}>
                <td>{i + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.result}</td>
                <td>{patient.email}</td>
                <td>
                  <Button className="update-button" onClick={() => handleShowModal(patient)}>
                    Update
                  </Button>
                  <Button className=" btn btn-danger"   onClick={() => handleDeletePatient(patient.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPatient ? 'Update Patient' : 'Add Doctor'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formResult">
              <Form.Label>Result</Form.Label>
              <div className="select-wrapper">
                <Form.Control
                  as="select"
                  placeholder="Select result"
                  value={result}
                  onChange={(e) => setResult(e.target.value)}>
                  <option> select..</option>
                  <option value="Proliferative">Proliferative</option>
                  <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                    <option value="None">None</option>
                </Form.Control>
                <div className="arrow">&#9662;</div>
              </div>
            </Form.Group>
            
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
                
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            {selectedPatient ? (
              <Button  variant="primary" onClick={handleUpdatePatient}>
                Update Patient
              </Button>
            ) : (
              <Button variant="primary" onClick={handleAddPatient}>
                Add Patient
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DoctorView;
