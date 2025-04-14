// DI container to manage dependencies
import RandomService from '../infrastructure/services/RandomService';
import DiceDataSource from '../infrastructure/datasources/DiceDataSource';
import DiceRepositoryImpl from '../infrastructure/repositories/DiceRepositoryImpl';
import RollDiceUseCase from '../app/usecases/RollDiceUseCase';
import DiceHistoryService from '../app/services/DiceHistoryService';

// Creating a simple DI container
class Container {
  private static instance: Container;
  private services: Map<string, any> = new Map();

  private constructor() {
    // Initialize core services
    this.services.set('randomService', new RandomService());
    
    // Initialize data sources with dependencies
    this.services.set('diceDataSource', new DiceDataSource(this.get('randomService')));
    
    // Initialize repositories with dependencies
    this.services.set('diceRepository', new DiceRepositoryImpl(this.get('diceDataSource')));
    
    // Initialize application services
    this.services.set('diceHistoryService', new DiceHistoryService());
    
    // Initialize use cases with dependencies
    this.services.set('rollDiceUseCase', new RollDiceUseCase(this.get('diceRepository')));
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  public get<T>(key: string): T {
    if (!this.services.has(key)) {
      throw new Error(`Service ${key} not found in container`);
    }
    return this.services.get(key) as T;
  }
}

// Export functions to access the container
export const getDI = (): Container => Container.getInstance();
export const getService = <T>(key: string): T => getDI().get<T>(key);

// Export specific services for convenience
export const getRollDiceUseCase = (): RollDiceUseCase => getService<RollDiceUseCase>('rollDiceUseCase');
export const getDiceHistoryService = (): DiceHistoryService => getService<DiceHistoryService>('diceHistoryService');