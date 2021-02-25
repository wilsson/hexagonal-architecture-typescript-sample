/**
 * @name TestAdapter
 */

import { ApplicationFactoryPort } from '../ports/ApplicationFactoryPort'

const app = ApplicationFactoryPort.create()

it('Discounter', () => {
  expect(app.discount(500)).toBe(10)
})