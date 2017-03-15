import React from 'react';

const LandingPage = (props) => {
  return (
    <div>
      <h1>Listen To This!!</h1>
      <h4>Welcome, { props.currentUser.username }</h4>
      <button onClick={ props.logOut }>Log Out</button>
    </div>
  )
;};

export default LandingPage;
