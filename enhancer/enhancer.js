module.exports = {
  success: function(item) {
    return {...item, enhancement: item.enhancement + 1};
  },
  fail: function(item) {
    const { enhancement, durability } = item;
    if(enhancement >= 0 && enhancement <= 14) {
      item.durability -= 5
    } 
    
    if (enhancement > 14) {
      item.durability -= 10
    }

    if(enhancement > 16) {
      item.enhancement -= 1
    }

    if (enhancement <= 14 && durability < 25) {
      item.enhancement = enhancement
    }

    if (enhancement >= 15 && durability < 10) {
      item.enhancement = enhancement
    }
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
