const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an Employee object if given valid arguments", () => {
      const employee = new Employee("Alex", 1, "alex@test.com");
      expect(employee.name).toEqual("Alex");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("alex@test.com");
      expect(employee.role).toEqual("Employee");
    });
  });

  describe("Name error case", () => {
    it("should throw an error if no name is provided", () => {
      const cb = () => new Employee(1, 1, "alex@test.com");
      expect(cb).toThrow();
    });
  });

  describe("ID error case", () => {
    it("should throw an error if no ID is provided", () => {
      const cb = () => new Employee("Alex", "Alex", "alex@test.com");
      expect(cb).toThrow();
    });
  });

  describe("Email error case", () => {
    it("should throw an error if no email is provided", () => {
      const cb = () => new Employee("Alex", 1, 1);
      expect(cb).toThrow();
    });
  });

  describe("Testing getName method", () => {
    it("should return the name from the object", () => {
      const employee = new Employee("Alex", 1, "alex@test.com");
      expect(employee.getName()).toEqual("Alex");
    });
  });

  describe("Testing getId method", () => {
    it("should return the ID from the object", () => {
      const employee = new Employee("Alex", 1, "alex@test.com");
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("Testing getEmail method", () => {
    it("should return the email from the object", () => {
      const employee = new Employee("Alex", 1, "alex@test.com");
      expect(employee.getEmail()).toEqual("alex@test.com");
    });
  });

  describe("Testing getRole method", () => {
    it("should return the role from the object", () => {
      const employee = new Employee("Alex", 1, "alex@test.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
