const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role)
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;