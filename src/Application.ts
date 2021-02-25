import { RateRepository } from './ports/RateRepositoryPort'

export class Discounter {
  constructor(
    public repository: RateRepository
  ) {}

  discount(amount: number) {
    const rate = this.repository.getRate(amount)
    return amount * rate
  }
}