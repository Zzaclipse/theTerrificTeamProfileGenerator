const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNum) {
    super(id, name, email);
    this.officeNum = officeNum;
    this.role = "Manager";
  }
  getOfficeNumber() {
    return this.officeNum;
  }
}

module.exports = Manager;
