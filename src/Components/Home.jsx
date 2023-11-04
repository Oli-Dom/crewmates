import React from 'react';
import './Home.css';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="welcome">
          <h1>Welcome to the Crewmate Creator!</h1>
          <br></br>
          <h3>Come create your own crewmates and send them into space</h3>
        </div>
        <img src="https://seeklogo.com/images/A/among-us-logo-86F6CC621B-seeklogo.com.png"></img>
      </div>
    </div>
  );
};

export default Home;
