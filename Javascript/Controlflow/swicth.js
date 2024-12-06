let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  default:
    console.log('I am not a banana or an apple.');
}


function getContainer(product) {
  switch (product) {
    case "Bread":
      return "bag";
    case "Beer":
      return "bottle";
    case "Candy":
      return "plastic";
    default:
      return null;
  }
}

// Test examples
console.log(getContainer("Bread")); // ➞ "bag"
console.log(getContainer("Beer")); // ➞ "bottle"
console.log(getContainer("Candy")); // ➞ "plastic"
console.log(getContainer("Cheese")); // ➞ null