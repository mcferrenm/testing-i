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

      expect(repair(item)).toEqual(newItem)
    });
  });

  describe("success()", () => {
    it("should be defined", () => {
      expect(success).toBeInstanceOf(Function);
    });

    it("should increment enhancement by 1", () => {
      
      const item = {
        name: "Sword",
        type: "weapon",
        enhancement: 10,
        durability: 100
      };
      const newItem = {
        name: "Sword",
        type: "weapon",
        enhancement: 11,
        durability: 100
      };
      expect(success(item)).toEqual(newItem)
    })
  });
});

// const item = {
//   name: "Sword", 
//   type: "weapon", (weapon or armor)
//   enhancement: 10, (0 - 20, starts at 0 ends at "PEN")
//   durability: 100, (0 - 100, starts at 100)
// }
