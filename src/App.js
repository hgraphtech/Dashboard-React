import './App.css';
import React from 'react';
import Table from './table.js'
import Chart from './chart.js'
import Navbar from './navbar.js'


function App() {
  return (
    <>
    < Navbar />
    <div className="container-fluid">
      <div className='row'>
        < Table />
        < Chart />
      </div>
    </div>
    </>
  );
}

export default App;
