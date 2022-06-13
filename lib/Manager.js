const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNum) {
    super(id, name, email);
    if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
    this.officeNum = officeNum;
    this.role = "Manager";
  }
  getOfficeNumber() {
    return this.officeNum;
  }
}

module.exports = Manager;
