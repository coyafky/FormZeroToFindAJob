创建新数组：concat 方法首先会创建一个新的空数组，用于存储合并后的结果。
复制原数组元素：concat 方法会将原数组中的所有元素复制到新数组中。
合并参数数组：concat 方法会遍历传入的参数数组，并将每个参数数组中的元素依次添加到新数组中。
返回新数组：最后，concat 方法会返回新数组。

concat 方法需要遍历所有传入的数组并复制元素，因此它的时间复杂度是 O(n)，其中 n 是所有数组元素的总数。