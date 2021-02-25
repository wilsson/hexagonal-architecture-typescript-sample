export interface RateRepository {
  getRate(amount: number): number;
}