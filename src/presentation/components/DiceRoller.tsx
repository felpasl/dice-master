import React from 'react';

/**
 * DiceRoller Component
 * UI component for rolling dice
 */
interface DiceRollerProps {
  onRoll: (sides: number) => void;
}

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll }) => {
  // Common dice types
  const diceTypes = [4, 6, 8, 10, 12, 20, 100];
  
  return (
    <div className="dice-roller">
      <h3>Choose a dice to roll</h3>
      <div className="dice-controls">
        {diceTypes.map(sides => (
          <button 
            key={`d${sides}`}
            className={`dice-button d${sides}`}
            onClick={() => onRoll(sides)}
          >
            D{sides}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiceRoller;