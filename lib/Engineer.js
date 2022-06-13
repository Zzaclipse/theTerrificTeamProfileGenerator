const Employee = require("./Employee");

//  * create get role method which overwrites the parent get role method and returns Engineer role

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
