import DiceRepository from '../../domain/repositories/DiceRepository';
import Dice from '../../domain/entities/Dice';
import DiceDataSource from '../datasources/DiceDataSource';

/**
 * DiceRepositoryImpl
 * Implements the DiceRepository interface
 */
class DiceRepositoryImpl implements DiceRepository {
  private dataSource: DiceDataSource;
  
  constructor(dataSource: DiceDataSource) {
    this.dataSource = dataSource;
  }
  
  getRandom(sides: number): Dice {
    // Get a random number using the data source
    const randomValue = this.dataSource.getRandomNumber(sides);
    const dice = new Dice(sides);
    dice.value = randomValue; // Set the random value on the dice
    return dice;
  }
}

export default DiceRepositoryImpl;