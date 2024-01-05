// DoctorRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DoctorRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem('User'));
  const isDoctor = user && user.role === 'doctor';

  return (
    <Route
      {...rest}
      render={(props) =>
        isDoctor ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default DoctorRoute;
