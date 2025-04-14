/**
 * RandomService
 * External service for generating random numbers
 */
class RandomService {
  getRandomNumber(min: number, max: number): number {
    // Implementation will go here
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default RandomService;