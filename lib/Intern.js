const Employee = require("./Employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    if (typeof school !== "string" || !school.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
