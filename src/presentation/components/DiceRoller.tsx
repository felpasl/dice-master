import React, { useState, useRef } from 'react';

/**
 * DiceRoller Component
 * UI component for rolling dice
 */
interface DiceRollerProps {
  onRoll: (sides: number) => void;
  onAnimationChange: (isAnimating: boolean, sides: number | null, currentValue: number | null) => void;
}

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll, onAnimationChange }) => {
  // Common dice types
  const diceTypes = [4, 6, 8, 10, 12, 20, 100];
  const [animatingDice, setAnimatingDice] = useState<number | null>(null);
  const [animationValues, setAnimationValues] = useState<number[]>([]);
  // Refs for button elements to apply dynamic animations
  const buttonRefs = useRef<{[key: number]: HTMLButtonElement | null}>({});
  
  // Helper function to set refs correctly
  const setButtonRef = (element: HTMLButtonElement | null, sides: number) => {
    if (buttonRefs.current) {
      buttonRefs.current[sides] = element;
    }
  };
  
  const handleRoll = (sides: number) => {
    // Start animation
    setAnimatingDice(sides);
    
    // Generate random values for animation
    // Random duration between 500ms and 1000ms as requested
    const animationDuration = Math.floor(Math.random() * 501) + 500;
    const fps = 12; // frames per second for animation
    const totalFrames = animationDuration / (1000 / fps);
    
    // Generate random values for each frame of the animation
    const animationRandomValues = Array.from(
      { length: totalFrames }, 
      () => Math.floor(Math.random() * sides) + 1
    );
    setAnimationValues(animationRandomValues);
    
    // Apply random animation style to the button
    const button = buttonRefs.current[sides];
    if (button) {
      // Choose a random animation style from our 4 options
      const animationIndex = Math.floor(Math.random() * 4) + 1;
      // Random animation speed between 0.3s and 0.5s for fast but visible animation
      const animationSpeed = (Math.random() * 0.2 + 0.3).toFixed(2);
      // Repetition count based on duration
      const repeatCount = Math.floor(animationDuration / (parseFloat(animationSpeed) * 1000)) || 1;
      
      // Apply the random animation with 3D effect
      button.style.animation = `dice3dRoll${animationIndex} ${animationSpeed}s ease-out ${repeatCount}`;
    }
    
    // Notify parent about animation starting
    onAnimationChange(true, sides, animationRandomValues[0]);
    
    // Set interval to show rolling animation
    let frame = 0;
    const animationInterval = setInterval(() => {
      frame++;
      
      // Update current value for animation
      if (frame < totalFrames) {
        onAnimationChange(true, sides, animationRandomValues[frame]);
      }
      
      if (frame >= totalFrames) {
        clearInterval(animationInterval);
        setAnimatingDice(null);
        
        // Reset animation style
        if (button) {
          button.style.animation = '';
        }
        
        // Notify animation ended
        onAnimationChange(false, null, null);
        // Call the actual roll function
        onRoll(sides);
      }
    }, 1000 / fps);
  };
  
  return (
    <div className="dice-roller">
      <h3>Choose a dice to roll</h3>
      <div className="dice-controls">
        {diceTypes.map(sides => (
          <button 
            key={`d${sides}`}
            ref={(el) => setButtonRef(el, sides)}
            className={`dice-button d${sides} ${animatingDice === sides ? 'animating' : ''}`}
            onClick={() => handleRoll(sides)}
            disabled={animatingDice !== null}
          >
            {/* Always show D{sides} on the button, even during animation */}
            {`D${sides}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiceRoller;