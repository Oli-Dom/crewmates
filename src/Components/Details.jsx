import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './details.css';
const Details = () => {
  const { id } = useParams();

  const [crewName, setCrewName] = useState('');
  const [crewColor, setCrewColor] = useState('');
  const [crewSpeed, setCrewSpeed] = useState(0);
  const [crewId, setCrewId] = useState(0);

  const supabaseURL = import.meta.env.VITE_URL;
  const supabaseKEY = import.meta.env.VITE_API_KEY;
  const supabase = createClient(supabaseURL, supabaseKEY);

  useEffect(() => {
    async function getMates() {
      const { data, error } = await supabase
        .from('characters')
        .select()
        .eq('id', id);
      if (error) {
        console.warn(error);
      }
      console.log(data[0]);
      setCrewId(data[0].id);
      setCrewColor(data[0].color);
      setCrewName(data[0].name);
      setCrewSpeed(data[0].speed);
    }
    getMates();
  }, []);

  const determineSpeedFact = (crewSpeed) => {
    if (crewSpeed == 0) {
      return <h3>Why aint you moving</h3>;
    } else if (crewSpeed > 0 && crewSpeed < 40) {
      return <h3>You have an average speed</h3>;
    } else if (crewSpeed >= 40 && crewSpeed < 100) {
      return <h3>You kinda fast </h3>;
    } else if (crewSpeed >= 100) {
      return <h3>Sheeeesh look at that speed!</h3>;
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('characters').delete().eq('id', id);
  };

  return (
    <div>
      <Navbar />
      <div className="details-container">
        <div className="details">
          <h2>Crewmates name: {crewName}</h2>
          <h2>Crewmates speed: {crewSpeed}</h2>
          <h2>Crewmates color : {crewColor}</h2>
          {determineSpeedFact(crewSpeed)}
        </div>
        <Link to={`/crewmates/update/${crewId}`} key={crewId}>
          <button>Edit this crewmate</button>
        </Link>
        <button onClick={handleDelete}>Erradicate from existence</button>
      </div>
    </div>
  );
};

export default Details;
