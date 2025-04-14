import React from 'react';
import './App.css';
import HomePage from './presentation/pages/HomePage';
import { getRollDiceUseCase } from './di/container';

const App: React.FC = () => {
  // Get the use case from the DI container
  const rollDiceUseCase = getRollDiceUseCase();
  
  return (
    <div className="App">
      <HomePage rollDiceUseCase={rollDiceUseCase} />
    </div>
  );
}

export default App;
