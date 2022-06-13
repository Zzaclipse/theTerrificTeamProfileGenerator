const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("Manager initialization", () => {
    it("should create an Manager object if given valid arguments", () => {
      const employee = new Manager("Alex", 1, "alex@test.com", 100);
      expect(employee.name).toEqual("Alex");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("alex@test.com");
      expect(employee.officeNum).toEqual(100);
      expect(employee.role).toEqual("Manager");
    });
  });
  describe("Testing if you dont give valid office number", () => {
    it("should throw an error", () => {
      const cb = () => new Manager("Alex", 1, "alex@test.com", -1);
      expect(cb).toThrow();
    });
  });
  describe("Testing getRole method", () => {
    it("should return the role Manager", () => {
      const employee = new Manager("Alex", 1, "alex@test.com", 100);
      expect(employee.getRole()).toEqual("Manager");
    });
  });
  describe("Testing getOfficeNumber method", () => {
    it("should return the managers office number", () => {
      const employee = new Manager("Alex", 1, "alex@test.com", 100);
      expect(employee.getOfficeNumber()).toEqual(100);
    });
  });
});
