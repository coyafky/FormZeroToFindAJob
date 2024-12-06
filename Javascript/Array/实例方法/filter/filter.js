let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter((x) => x % 2 === 0);

console.log(filteredArr);

// 修改每个单词

let words = ['spray', 'limit', 'exuberant', 'destruction'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += 'hello';
  return word.length < 6;
});

console.log(modifiedWords);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [ 2, 3, 5, 7, 11, 13 ]
function isEnough(value){
  return value >= 10;
}

const filtered = [12,1,11,2,3,111].filter(isEnough);
console.log(filtered); // [ 12, 11, 111 ]


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var creatures = [
  {name: "Shark", habitat: "Ocean"},
  {name: "Whale", habitat: "Ocean"},
  {name: "Lion", habitat: "Savanna"},
  {name: "Monkey", habitat: "Jungle"}
];

var aquaticCreatures =  creatures.filter(function(creature) {
  return creature.habitat == "Ocean";
});

console.log(aquaticCreatures);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItem (arr,query){
    return arr.filter((el)=>el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItem(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItem(fruits, "an")); // ['banana', 'mango', 'orange']