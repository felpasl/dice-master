import React from 'react';
import './App.css';
import HomePage from './presentation/pages/HomePage';
import DiceDataSource from './data/datasources/DiceDataSource';
import DiceRepositoryImpl from './data/repositories/DiceRepositoryImpl';
import RandomService from './infrastructure/services/RandomService';

function App() {
  // Here we would set up our dependency injection
  
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
