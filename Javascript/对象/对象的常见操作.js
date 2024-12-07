// 先定义一个对象

var info = {
  name: 'c罗',
  age: 18,
  friends: ['a', 'b', 'c'],
  running: function () {
    console.log('running');
  },
};

// 访问对象的属性
console.log(info.name);
console.log(info.age);
// 访问对象的方法
info.running();

// 遍历对象的属性
for (var key in info) {
  console.log(key, info[key]);
}

// 修改对象的属性
info.age = 25;
info.running = function () {
  console.log('I am running~');
};

// 添加对象的属性
info.sex = '男';
info.height = 1.88;

// 删除对象的属性
delete info.sex;
console.log(info);
