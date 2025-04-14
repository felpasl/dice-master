/**
 * RollDiceUseCase
 * Contains the business logic for rolling a dice
 */
import Dice from '../../domain/entities/Dice';
import DiceRepository from '../../domain/repositories/DiceRepository';

class RollDiceUseCase {
  private diceRepository: DiceRepository;

  constructor(diceRepository: DiceRepository) {
    this.diceRepository = diceRepository;
  }
  
  execute(sides: number): Dice {
    // Business logic will be implemented here
    return this.diceRepository.getRandom(sides);
  }
}

export default RollDiceUseCase;