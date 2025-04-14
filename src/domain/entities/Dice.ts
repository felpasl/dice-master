/**
 * Dice entity class
 * Represents a dice with a specific number of sides
 */
class Dice {
  private _sides: number;
  private _value: number;

  constructor(sides: number) {
    if (sides < 2) {
      throw new Error('Dice must have at least 2 sides');
    }
    this._sides = sides;
    this._value = 0; // Default value before rolling
  }

  get sides(): number {
    return this._sides;
  }

  get value(): number {
    return this._value;
  }

  set value(newValue: number) {
    // Validate that the value is within the valid range for this dice
    if (newValue < 1 || newValue > this._sides) {
      throw new Error(`Value must be between 1 and ${this._sides}`);
    }
    this._value = newValue;
  }
}

export default Dice;