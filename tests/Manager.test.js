const Manager = require('../lib/Intern.js')
const testManager = new Manager('John', 1, 'john@gmail.com', 'manager')

test('name as entered', () => {
  expect(testManager.name).toEqual(expect.any(String))
  expect(testManager.name.length).toBeGreaterThan(2)
})

test('ID has a number', () => {
  expect(testManager.id).toEqual(expect.any(Number))
})

test('valid email', () => {
  expect(testManager.email).toEqual(expect.stringContaining('@'))
})

test('role chosen is Manager', () => {
  expect(testManager.role).toBe('manager')
})

test('ofiice number was provided', () => {
  expect(testManager.officeNumber).toEqual(expect.any(Number))
})