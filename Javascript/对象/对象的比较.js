// object ===

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 1,
  b: 2,
};
console.log(obj1 === obj2); //false
const obj3 = obj1;
console.log(obj1 === obj3); //true

// JSON.stringify()

const obj4 = {
  a: 1,
  b: 2,
};

const obj5 = {
  a: 1,
  b: 2,
};
// . By comparing the resulting strings
console.log(JSON.stringify(obj4) === JSON.stringify(obj5)); //true

// 自定义对象的比较

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
const obj6 = {
  a: 1,
  b: 2,
};

const obj7 = {
  a: 1,
  b: 2,
};
console.log(compareObjects(obj6, obj7)); //true
