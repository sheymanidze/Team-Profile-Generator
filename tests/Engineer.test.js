const Engineer = require('../lib/Engineer.js')
const testEngineer = new Engineer('John', 1, 'john@gmail.com', 'engineer', 'gitHub')

test('name as entered', () => {
  expect(testEngineer.name).toEqual(expect.any(String))
  expect(testEngineer.name.length).toBeGreaterThan(2)
})

test('ID has a number', () => {
  expect(testEngineer.id).toEqual(expect.any(Number))
})

test('valid email', () => {
  expect(testEngineer.email).toEqual(expect.stringContaining('@'))
})

test('role chosen is Engineer', () => {
  expect(testEngineer.role).toBe('engineer')
})

test('Github was provided', () => {
  expect(testEngineer.gitHub).toEqual(expect.any(String))
})
