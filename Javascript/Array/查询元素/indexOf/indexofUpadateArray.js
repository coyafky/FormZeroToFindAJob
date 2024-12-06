let arr = [1, 2, 3, 4, 5];
let element = 3;

function updateArray(arr, element) {
  let index = arr.indexOf(element);
  if (index !== -1) {
    console.log('already exit');
  } else {
    arr.push(element);
  }
  return arr;
}

let updatedArr = updateArray(arr, element);
console.log(updatedArr); // 输出: [1, 2, 3, 4, 5]
