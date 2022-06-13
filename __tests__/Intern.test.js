const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Intern initialization", () => {
    it("should create an Intern object if given valid arguments", () => {
      const employee = new Intern("Alex", 1, "alex@test.com", "Rutgers");
      expect(employee.name).toEqual("Alex");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("alex@test.com");
      expect(employee.school).toEqual("Rutgers");
      expect(employee.role).toEqual("Intern");
    });
  });
  describe("Testing if you dont give valid school", () => {
    it("should throw an error", () => {
      const cb = () => new Intern("Alex", 1, "alex@test.com", 1);
      expect(cb).toThrow();
    });
  });
  describe("Testing getRole method", () => {
    it("should return the role Intern", () => {
      const employee = new Intern("Alex", 1, "alex@test.com", "Rutgers");
      expect(employee.getRole()).toEqual("Intern");
    });
  });
  describe("Testing getSchool method", () => {
    it("should return the interns school", () => {
      const employee = new Intern("Alex", 1, "alex@test.com", "Rutgers");
      expect(employee.getSchool()).toEqual("Rutgers");
    });
  });
});
