const Manager = require('../lib/Manager.js')
const testManager = new Manager('John2', 1, 'john@gmail.com', 'manager', 1111111111)
console.log(testManager)
test('name as entered', () => {
  expect(testManager.name).toEqual(expect.any(String))
  expect(testManager.name.length).toBeGreaterThan(2)
  //expect(testManager.name).toEqual(stringMatching([/[A-Za-z]/gi]))
  const expected = expect.stringMatching(/[A-Za-z]/gi)
  expect(testManager.name).toEqual(expected)
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