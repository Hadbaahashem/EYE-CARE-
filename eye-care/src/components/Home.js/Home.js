import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import NavBar from '../Nav/NavBar';
import Service from '../ServiceCard/Service';
import { Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!sessionStorage.getItem('User');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <NavBar />
      {isAuthenticated ? (
        // Render content with buttons for authenticated users
        <>
          <Header />
          <Service />
        </>
      ) : (
        // Render content without buttons for non-authenticated users
        <>   
        <Header />
        <Service />
      </>
    )}
    </div>
  );
};

export default Home;
