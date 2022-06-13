const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Engineer initialization", () => {
    it("should create an Engineer object if given valid arguments", () => {
      const employee = new Engineer("Alex", 1, "alex@test.com", "Zzaclipse");
      expect(employee.name).toEqual("Alex");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("alex@test.com");
      expect(employee.github).toEqual("Zzaclipse");
      expect(employee.role).toEqual("Engineer");
    });
  });
  describe("Testing if you dont give valid github", () => {
    it("should throw an error", () => {
      const cb = () => new Engineer("Alex", 1, "alex@test.com", 1);
      expect(cb).toThrow();
    });
  });
  describe("Testing getRole method", () => {
    it("should return the role Engineer", () => {
      const employee = new Engineer("Alex", 1, "alex@test.com", "Zzaclipse");
      expect(employee.getRole()).toEqual("Engineer");
    });
  });
  describe("Testing getGithub method", () => {
    it("should return the engineers github", () => {
      const employee = new Engineer("Alex", 1, "alex@test.com", "Zzaclipse");
      expect(employee.getGithub()).toEqual("Zzaclipse");
    });
  });
});
