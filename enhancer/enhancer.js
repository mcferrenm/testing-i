module.exports = {
  success: function(item) {
    return item;
  },
  fail: function(item) {
    return item;
  },
  repair: function(item) {
    return {...item, durability: 100};
  }
};

// const item = {
//   name: "Sword",
//   type: "weapon",
//   enhancement: 10,
//   durability: 100,
// }

// a repair(item) method that accepts an item object and returns a new item
// with the durability restored to 100. This method is the simplest of the
// three and would be a good starting point on this project.
