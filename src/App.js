import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './materiHari15/Routes'
import HargaBuah from './tugas14/HargaBuahTugas14';



function App() {
  return (
    <div>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
