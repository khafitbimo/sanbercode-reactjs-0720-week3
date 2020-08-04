import React from 'react';
import './App.css';
import HargaBuah from './tugas11/HargaBuah';
import CountDown from './tugas12/CountDown';

function App() {
  return (
    <div>
      <HargaBuah />
      <CountDown countStart={100}/>
    </div>
  );
}

export default App;
