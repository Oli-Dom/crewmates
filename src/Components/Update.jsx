import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CreateCrewmate.css';
import Navbar from './Navbar';
const Update = () => {
  const supabaseURL = import.meta.env.VITE_URL;
  const supabaseKEY = import.meta.env.VITE_API_KEY;
  const supabase = createClient(supabaseURL, supabaseKEY);
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.username.value;
    const speed = event.target.elements.age.value;
    const color = event.target.elements.color.value;
    const { error } = await supabase
      .from('characters')
      .update({
        name: name,
        speed: speed,
        color: color.toLowerCase(),
      })
      .eq('id', id);
  };

  return (
    <div>
      <Navbar />
      <div className="top-page">
        <h1>Update the Cremate</h1>
        <img src="https://cdn2.iconfinder.com/data/icons/games-solic/24/Among-Us-512.png"></img>
      </div>
      <div className="creation">
        <form onSubmit={handleSubmit}>
          <label>
            Enter crewmate's name:
            <input type="text" name="username" />
          </label>
          <label>
            Enter the speed:
            <input type="number" name="age" />
          </label>
          Choose a color:
          <input type="radio" id="red" name="color" value="RED" />
          <label htmlFor="red">Red</label>
          <br />
          <input type="radio" id="green" name="color" value="GREEN" />
          <label htmlFor="green">Green</label>
          <br />
          <input type="radio" id="blue" name="color" value="BLUE" />
          <label htmlFor="blue">Blue</label>
          <br />
          <input type="radio" id="purple" name="color" value="PURPLE" />
          <label htmlFor="purple">Purple</label>
          <br />
          <input type="radio" id="yellow" name="color" value="YELLOW" />
          <label htmlFor="yellow">Yellow</label>
          <input type="radio" id="orange" name="color" value="ORANGE" />
          <label htmlFor="orange">Orange</label>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Update;
