Array.prototype.myFlat = function (depth = 1) {
  let result = [];

  function flatten(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currentDepth < depth) {
        flatten(arr[i], currentDepth + 1);
      } else {
        result.push(arr[i]);
      }
    }
  }

  flatten(this, 0);
  return result;
};

let arr = [1, [2, [3, 4]], 5];
let flatArr = arr.myFlat(2);
console.log(flatArr); // 输出: [1, 2, 3, 4, 5]
