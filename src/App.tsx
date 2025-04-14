import React from 'react';
import './App.css';
import HomePage from './presentation/pages/HomePage';
import DiceDataSource from './data/datasources/DiceDataSource';
import DiceRepositoryImpl from './data/repositories/DiceRepositoryImpl';
import RandomService from './infrastructure/services/RandomService';
import RollDiceUseCase from './domain/usecases/RollDiceUseCase';

const App: React.FC = () => {
  // Here we would set up our dependency injection
  const randomService = new RandomService();
  const diceDataSource = new DiceDataSource();
  const diceRepository = new DiceRepositoryImpl(diceDataSource);
  const rollDiceUseCase = new RollDiceUseCase(diceRepository);
  
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
