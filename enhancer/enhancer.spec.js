const { repair } = require("./enhancer");

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
});
