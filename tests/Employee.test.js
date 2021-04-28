//const { TestResult } = require("@jest/types");

const Employee = require('../lib/Employee.js')
const testEmployee = new Employee('John', 1, 'john@gmail.com')

test('name as entered', () => {
  expect(testEmployee.name).toEqual(expect.any(String))
  expect(testEmployee.name.length).toBeGreaterThan(2)
})

test('ID has a number', () => {
  expect(testEmployee.id).toEqual(expect.any(Number))
})

test('valid email', () => {
  expect(testEmployee.email).toEqual(expect.stringContaining('@'))
})