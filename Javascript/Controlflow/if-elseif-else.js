// BMI
let weight = Number(prompt('请输入你的体重'));
let height = Number(prompt('请输入你的身高'));

let BMI = weight / (height * height);
alert('BMO指数' + BMI);
if (BMI < 18.5) {
  alert('偏瘦');
} else if (BMI >= 18.5 && BMI < 24) {
  alert('正常');
} else if (BMI >= 24 && BMI < 28) {
  alert('偏胖');
} else if (BMI >= 28 && BMI < 32) {
  alert('肥胖');
} else {
  alert('严重肥胖');
}

//  score

let score = Number(prompt('请输入你的成绩'));

if (score > 85) {
  alert('优秀');
} else if (score > 70) {
  alert('良好');
} else if (score > 60) {
  alert('及格');
} else {
  alert('不及格');
}
