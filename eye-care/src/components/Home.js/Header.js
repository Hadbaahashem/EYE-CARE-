import React from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  // Retrieve user information from session storage
  const user = JSON.parse(sessionStorage.getItem('User'));

  // Check if the user is logged in
  const isLoggedIn = !!user;

  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2> Caring for your vision</h2>
            {/* Conditionally render the buttons based on whether the user is logged in */}
            {isLoggedIn ? (
              <React.Fragment>
                <a href='/Appointment'>
                  <Button>Book Appointment</Button>
                </a>
                {/* Additional buttons for logged-in users */}
                {user.role === 'doctor' && (
                  <Link to="/doctorview">
                    <Button className="bttn">Doctor View</Button>
                  </Link>
                )}
              </React.Fragment>
            ) : (
              // Render login button if the user is not logged in
              <Link to="/login">
                <Button>Subscribe Now</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
