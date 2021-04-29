const Intern = require('../lib/Intern.js')
const testIntern = new Intern('John', 1, 'john@gmail.com', 'intern', 'school')

test('name as entered', () => {
  expect(testIntern.name).toEqual(expect.any(String))
  expect(testIntern.name.length).toBeGreaterThan(2)
})

test('ID has a number', () => {
  expect(testIntern.id).toEqual(expect.any(Number))
})

test('valid email', () => {
  expect(testIntern.email).toEqual(expect.stringContaining('@'))
})

test('role chosen is Intern', () => {
  expect(testIntern.role).toBe('intern')
})

test('entered school name', () => {
  expect(testIntern.school).toEqual(expect.any(String))
  expect(testIntern.name.length).toBeGreaterThan(2)
})