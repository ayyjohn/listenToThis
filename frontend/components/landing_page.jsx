import React from 'react';

const LandingPage = (props) => {
  return (
    <div>
      <h1>Listen To This!!</h1>
      <h4>Welcome, { props.currentUser.username }</h4>
    </div>
  )
;};

export default LandingPage;
