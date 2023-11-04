import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import crewLogo from '../assets/crewmate.png';
import './CrewmateGallery.css';
import Navbar from './Navbar';
const CrewmateGallery = () => {
  const [crew, setCrew] = useState([]);

  const supabaseURL = import.meta.env.VITE_URL;
  const supabaseKEY = import.meta.env.VITE_API_KEY;
  const supabase = createClient(supabaseURL, supabaseKEY);

  useEffect(() => {
    async function getMates() {
      const { data, error } = await supabase.from('characters').select();
      if (error) {
        console.warn(error);
      }
      console.log(data);
      setCrew(data);
    }
    getMates();
  }, []);

  const display = (crewList) => {
    return (
      <div className="crewmateContainer">
        {crewList.map((crewMember) => {
          return (
            <div className="crewmate">
              <Link to={`/crewmates/${crewMember.id}`} key={crewMember.id}>
                <img src={crewLogo} />
                <h2>Name: {crewMember.name}</h2>
                <h2>Speed: {crewMember.speed}</h2>
                <h2>Color: {crewMember.color}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div>{display(crew)}</div>
    </div>
  );
};

export default CrewmateGallery;
