import { RateRepository } from '../ports/RateRepositoryPort'

export class MockRateRepository implements RateRepository {
  getRate(amount: number): number {
    if(amount <= 100) return 0.01
    if(amount <= 1000) return 0.02
    return 0.05
  }
}

export class RepositoryFactory {
  static getMockRepository() {
    return new MockRateRepository
  }
}