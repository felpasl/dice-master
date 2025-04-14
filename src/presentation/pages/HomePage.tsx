import React from 'react';
import DiceRoller from '../components/DiceRoller';

/**
 * HomePage
 * Main page component for the dice-master application
 */
const HomePage: React.FC = () => {
  // Page implementation will go here
  
  return (
    <div className="home-page">
      <h1>Dice Master</h1>
      <DiceRoller onRoll={(sides) => {
        // Handle dice roll
        console.log(`Rolling a ${sides}-sided die`);
      }} />
    </div>
  );
};

export default HomePage;