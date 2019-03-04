const { repair, success, fail } = require("./enhancer");

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("should be defined", () => {
      expect(repair).toBeInstanceOf(Function);
    });

    it("should return a new item with durability restored to 100", () => {
      const item = {
        name: "Sword",
        type: "weapon",
        enhancement: 10,
        durability: 90
      };
      const newItem = {
        name: "Sword",
        type: "weapon",
        enhancement: 10,
        durability: 100
      };

      expect(repair(item)).toEqual(newItem);
    });
  });

  describe("success()", () => {
    it("should be defined", () => {
      expect(success).toBeInstanceOf(Function);
    });

    it("should increment enhancement by 1", () => {
      const item = {
        enhancement: 10,
      };
      const newItem = {
        enhancement: 11,
      };
      expect(success(item)).toEqual(newItem);
    });
  });
  describe("fail()", () => {
    it("should be defined", () => {
      expect(fail).toBeInstanceOf(Function);
    });

    it("should decrease durability by 5 if enhancement is between 0 and 14", () => {
      const item = {
        enhancement: 10,
        durability: 100
      };
      const newItem = {
        enhancement: 10,
        durability: 95
      };

      expect(fail(item)).toEqual(newItem);
    });

    it("should decrease durability by 10 if enhancement is greater than 14", () => {
      const item = {
        enhancement: 15,
        durability: 100
      };
      const newItem = {
        enhancement: 15,
        durability: 90
      };

      expect(fail(item)).toEqual(newItem);
    });
  });
});

// const item = {
//   name: "Sword",
//   type: "weapon", (weapon or armor)
//   enhancement: 10, (0 - 20, starts at 0 ends at "PEN")
//   durability: 100, (0 - 100, starts at 100)
// }
