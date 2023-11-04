import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <h2>
        <NavLink to="/">Home</NavLink>
      </h2>
      <h2>
        <NavLink to="/create">Create a Crewmate</NavLink>
      </h2>
      <h2>
        <NavLink to="/gallery">Crewmate Gallery</NavLink>
      </h2>
    </div>
  );
};

export default Navbar;
