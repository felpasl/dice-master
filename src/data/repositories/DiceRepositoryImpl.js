import DiceRepository from '../../domain/repositories/DiceRepository';
import Dice from '../../domain/entities/Dice';

/**
 * DiceRepositoryImpl
 * Implements the DiceRepository interface
 */
class DiceRepositoryImpl extends DiceRepository {
  constructor(dataSource) {
    super();
    this.dataSource = dataSource;
  }
  
  getRandom(sides) {
    // Implementation will go here
  }
}

export default DiceRepositoryImpl;