/**
 * DiceHistoryService
 * Application service for tracking dice roll history
 */
interface DiceRoll {
  sides: number;
  value: number;
  timestamp: Date;
}

class DiceHistoryService {
  private history: DiceRoll[] = [];
  private maxHistorySize: number;

  constructor(maxHistorySize: number = 10) {
    this.maxHistorySize = maxHistorySize;
  }

  addRoll(sides: number, value: number): void {
    const roll: DiceRoll = {
      sides,
      value,
      timestamp: new Date()
    };

    this.history.unshift(roll); // Add to beginning of array
    
    // Trim history if needed
    if (this.history.length > this.maxHistorySize) {
      this.history = this.history.slice(0, this.maxHistorySize);
    }
  }

  getHistory(): DiceRoll[] {
    return [...this.history]; // Return a copy to prevent modification
  }

  clearHistory(): void {
    this.history = [];
  }
}

export default DiceHistoryService;