import './App.css';
import React from 'react';
import Table from './table.js'
import Chart from './chart.js'



function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        < Table />
        < Chart />
      </div>
    </div>
  );
}

export default App;
