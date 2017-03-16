import React from 'react';
import { Link } from 'react-router';

const SplashPage = () => (
  <div className="splash-page">
    <header className="nav-bar">
      <h1 className="splash-logo">Listen to This!</h1>
      <section className="splash-buttons">
        <Link className="splash-auth-button" to="/signup">Sign Up</Link>
        <Link className="splash-auth-button" to="/login">Log In</Link>
      </section>
    </header>
    <section className="splash-tag-line">
      <h1 id="tag-line">Love to Explore. Love to Share</h1>
      <Link id="splash-get-started" to="/signup">Get Started</Link>
    </section>
  </div>
);

export default SplashPage;
