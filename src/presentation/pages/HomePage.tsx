import React, { useState } from 'react';
import DiceRoller from '../components/DiceRoller';
import RollDiceUseCase from '../../app/usecases/RollDiceUseCase';
import Dice from '../../domain/entities/Dice';

/**
 * HomePage
 * Main page component for the dice-master application
 */
interface HomePageProps {
  rollDiceUseCase: RollDiceUseCase;
}

const HomePage: React.FC<HomePageProps> = ({ rollDiceUseCase }) => {
  const [lastRoll, setLastRoll] = useState<{ sides: number, result: number } | null>(null);
  const [animationState, setAnimationState] = useState<{
    isAnimating: boolean;
    sides: number | null;
    currentValue: number | null;
  }>({
    isAnimating: false,
    sides: null,
    currentValue: null,
  });
  
  const handleDiceRoll = (sides: number) => {
    // Use the provided use case to roll the dice
    const dice = rollDiceUseCase.execute(sides);
    
    setLastRoll({ sides, result: dice.value });
    console.log(`Rolling a ${sides}-sided die: ${dice.value}`);
  };
  
  const handleAnimationChange = (isAnimating: boolean, sides: number | null, currentValue: number | null) => {
    setAnimationState({
      isAnimating,
      sides,
      currentValue,
    });
  };
  
  // Display either the animation value or the final roll result
  const displayResult = () => {
    if (animationState.isAnimating && animationState.currentValue !== null) {
      return (
        <div className="last-roll-info">
          <h2>Rolling D{animationState.sides}</h2>
          <p>Current value: <span className="roll-result">{animationState.currentValue}</span></p>
        </div>
      );
    } else if (lastRoll) {
      return (
        <div className="last-roll-info">
          <h2>Last Roll</h2>
          <p>You rolled a D{lastRoll.sides} and got: <span className="roll-result">{lastRoll.result}</span></p>
        </div>
      );
    } else {
      // Show instructions when no rolls have happened yet
      return (
        <div className="last-roll-info">
          <h2>Instructions</h2>
          <p>Click on one of the dice buttons above to roll it.</p>
          <p>Each dice is labeled with the number of sides (D4, D6, D8, etc.).</p>
          <p>The result will appear here after rolling.</p>
        </div>
      );
    }
  };
  
  return (
    <div className="home-page">
      <h1>Dice Master</h1>
      <p>Roll your dice with precision!</p>
      
      <DiceRoller onRoll={handleDiceRoll} onAnimationChange={handleAnimationChange} />
      
      {displayResult()}
    </div>
  );
};

export default HomePage;