const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    if (typeof github !== "string" || !github.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
