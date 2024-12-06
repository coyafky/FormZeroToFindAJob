Array.prototype.mySplice = function(start,deleteCount,...items){
  //   // items 是一个数组，包含了所有传入的参数
  if(start<0){
    // 起始索引 start：如果 start 小于 0，我们将其调整为相对于数组末尾的索引
    start = Math.max(this.length+start,0);

  }
  // 删除数量 deleteCount：我们确保 deleteCount 是一个非负整数，并且不超过从 start 开始的剩余元素数量

  deleteCount =Math.min(Math.max(deleteCount,0),this.length-start);

  // 存储被删除的元素
  // 创建一个空数组 removed，用于存储被删除的元素。然后，我们遍历从 start 开始的 deleteCount 个元素，并将它们添加到 removed 数组中

  let removed =[];
  for(let i=0;i<deleteCount;i++){
    removed.push(this[start+i]);
  }

  // 移动剩余的元素
  // 我们使用一个循环来遍历从 start + deleteCount 开始的剩余元素，并将它们向前移动 deleteCount 个位置，以腾出空间来插入新的元素。
  for(let i=start+deleteCount; i<this.length;i++){
    this(i-deleteCount+items.length)=this[i]
  }

  // 插入新的元素
  // 最后，我们使用一个循环来遍历 items 数组，并将它们插入到 start 位置开始的位置。
  for(let i=0;i<items.length;i++){
    this[start+i]=items[i];
  }

  // 更新数组长度
  // 最后，我们更新数组的长度，使其等于原始长度减去被删除的元素数量，加上插入的新元素数量。
  this.length = this.length - deleteCount + items.length;

  return removed;
}


let arr = [1, 2, 3, 4, 5];
let removed = arr.mySplice(2, 1, 6);
console.log(arr); // 输出: [1, 2, 6, 4, 5]
console.log(removed); // 输出: [3]