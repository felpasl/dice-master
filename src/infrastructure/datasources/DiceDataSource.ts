// DiceDataSource moved to infrastructure layer
import RandomService from '../services/RandomService';

/**
 * DiceDataSource
 * Handles the actual data operations (could be API calls, local storage, etc.)
 */
class DiceDataSource {
  private randomService: RandomService;
  
  constructor(randomService: RandomService) {
    this.randomService = randomService;
  }
  
  getRandomNumber(max: number): number {
    return this.randomService.getRandomNumber(1, max);
  }
}

export default DiceDataSource;