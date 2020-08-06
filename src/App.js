import React from 'react';
import './App.css';
// import HargaBuah from './tugas11/HargaBuah';
// import CountDown from './tugas12/CountDown';
// import HargaBuah from './tugas13/HargaBuahTugas13'
import HargaBuah from './tugas14/HargaBuahTugas14'

// let dataHargaBuah = [
//   {nama: "Semangka", harga: 10000, berat: 1000},
//   {nama: "Anggur", harga: 40000, berat: 500},
//   {nama: "Strawberry", harga: 30000, berat: 400},
//   {nama: "Jeruk", harga: 30000, berat: 1000},
//   {nama: "Mangga", harga: 30000, berat: 500}
// ]


function App() {
  return (
    <div>
      <HargaBuah/>
      {/* <HargaBuah daftarBuah={dataHargaBuah}/> */}
      {/* <CountDown countStart={100}/> */}
    </div>
  );
}

export default App;
