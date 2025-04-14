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
    // Implementation will go here
    return new Dice(sides);
  }
}

export default DiceRepositoryImpl;