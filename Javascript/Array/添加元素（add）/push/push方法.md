JavaScript 数组在内部通常是一个连续的内存块，每个元素占据一定的内存空间。数组的索引实际上是对内存地址的偏移量。

Push 方法的操作步骤
1 检查参数 push 方法会检查传入的参数，确保它们是有效的值。
2 插入新元素 push 方法会在数组的末尾插入新元素。由于数组的末尾是当前 length 属性的值，因此新元素的索引就是 length。
3 更新数组长度 插入新元素后，push 方法会更新数组的 length 属性，以反映数组的新长度。

时间复杂度是 0 （1），因为 push 方法只需要在数组的末尾添加新元素，而不需要移动其他元素。
