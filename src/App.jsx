import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateCrewmate from './Components/CreateCrewmate';
import CrewmateGallery from './Components/CrewmateGallery';
import Details from './Components/Details';
import Home from './Components/Home';
import Update from './Components/Update';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<CrewmateGallery />} />
          <Route path="/crewmates/:id" element={<Details />} />
          <Route path="/crewmates/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
