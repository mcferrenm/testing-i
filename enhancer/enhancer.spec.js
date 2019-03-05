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

      expect(success(item).enhancement).toBe(11);
    });

    it("should modify name to include enhancement level b/t brackets before the item's name", () => {
      const item = {
        name: "Slayer",
        enhancement: 7
      };
      expect(success(item).name).toBe("[+8] Slayer")
    })

    it("should use special names for enhancements 16-20", () => {
      const item1 = {
        name: "Slayer",
        enhancement: 16
      }
      const item2 = {
        name: "Beast",
        enhancement: 20
      }

      expect(success(item1).name).toBe("[PRI] Slayer")
      expect(success(item2).name).toBe("[PEN] Beast")
    })
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

      expect(fail(item).durability).toBe(95);
    });

    it("should decrease durability by 10 if enhancement is greater than 14", () => {
      const item = {
        enhancement: 15,
        durability: 100
      };

      expect(fail(item).durability).toBe(90);
    });
    
    it("should decrement enhancement by 1 if greater than 16", () => {
      expect(fail({ enhancement: 17 }).enhancement).toBe(16);
    });

    it("should not change enhanced if enhancement is 14 or lower && durability is below 25", () => {
      const item = {
        enhancement: 14,
        durability: 24
      };
      
      expect(fail(item).enhancement).toBe(14);
    })

    it("should not change enhanced if enhancement is 15 or higher && durability is below 10", () => {
      const item = {
        enhancement: 15,
        durability: 9
      };
      
      expect(fail(item).enhancement).toBe(15);
    })

    it("should not fail when enhancing armor upto 5", () => {
      const item = {
        type: "armor",
        enhancement: 4,
        durability: 100,
      };

      const newItem = {
        type: "armor",
        enhancement: 4,
        durability: 100,
      };
      
      expect(fail(item)).toEqual(newItem)
    })

    it("should not fail when enhancing armor upto 5", () => {
      const item = {
        type: "weapon",
        enhancement: 6,
        durability: 100,
      };

      const newItem = {
        type: "weapon",
        enhancement: 6,
        durability: 100,
      };
      
      expect(fail(item)).toEqual(newItem)
    })

    it("should modify name to include enhancement level b/t brackets before the item's name", () => {
      const item = {
        name: "[DUO] Slayer",
        enhancement: 17
      };
      expect(fail(item).name).toBe("[PRI] Slayer")
    })

    // it("should use special names for enhancements 16-20", () => {
    //   const item1 = {
    //     name: "Slayer",
    //     enhancement: 16
    //   }
    //   const item2 = {
    //     name: "Beast",
    //     enhancement: 20
    //   }

    //   expect(success(item1).name).toBe("[PRI] Slayer")
    //   expect(success(item2).name).toBe("[PEN] Beast")
    // })
  });
});