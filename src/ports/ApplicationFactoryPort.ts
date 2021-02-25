import { RepositoryFactory } from '../adapters/MockRepositoryAdapter'
import { Discounter } from '../Application'

export class ApplicationFactoryPort {
  static create() {
    return new Discounter(RepositoryFactory.getMockRepository())
  }
}