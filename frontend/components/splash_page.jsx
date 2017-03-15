import React from 'react';
import { Link } from 'react-router';

const SplashPage = () => (
  <div>
    <h1>Listen to This!!</h1>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </div>
);

export default SplashPage;
