module.exports = {
  newName: function(name, enhancement) {
    const enhanceNameMap = {
      16: "PRI",
      17: "DUO",
      18: "TRI",
      19: "TET",
      20: "PEN"
    };

    return `[${enhanceNameMap[enhancement]}] ${name}`;
  },
  success: function(item) {
    const { enhancement, name } = item;
    const newEnhancement = enhancement + 1;
    const enhanceNameMap = {
      16: "PRI",
      17: "DUO",
      18: "TRI",
      19: "TET",
      20: "PEN"
    };

    let newName = "";
    if (newEnhancement > 15 && item.name) {
      // remove old brakcets [+7] with split or something
      
        newName = `[${enhanceNameMap[item.enhancement]}] ${item.name.substring(6)}`;
  

    } else {
      newName = `[+${newEnhancement}] ${name}`;
    }

    return {
      ...item,
      enhancement: newEnhancement,
      name: newName
    };
  },
  fail: function(item) {
    const enhanceNameMap = {
      16: "PRI",
      17: "DUO",
      18: "TRI",
      19: "TET",
      20: "PEN"
    };

    const { type, enhancement, durability, name } = item;

    if (type === "armor" && enhancement < 5) {
      return item;
    }

    if (type === "weapon" && enhancement < 7) {
      return item;
    }

    if (enhancement <= 14 && durability < 25) {
      return item;
    }

    if (enhancement >= 15 && durability < 10) {
      return item;
    }

    if (enhancement >= 0 && enhancement <= 14) {
      item.durability -= 5;
    }

    if (enhancement > 14) {
      item.durability -= 10;
    }
    let newName = ""

    if (enhancement > 16) {
      item.enhancement -= 1;

      if (item.name) {
        newName = `[${enhanceNameMap[item.enhancement]}] ${item.name.substring(6)}`;
      }
    }

    return {
      ...item,
      name: newName
    };
  },
  repair: function(item) {
    return { ...item, durability: 100 };
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
