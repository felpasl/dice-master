/**
 * DiceRepository interface
 * Defines methods for accessing dice data
 */
import Dice from '../entities/Dice';

interface DiceRepository {
  getRandom(sides: number): Dice;
}

export default DiceRepository;