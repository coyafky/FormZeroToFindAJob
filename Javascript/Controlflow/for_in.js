const person = {
  name: 'coya',
  age: 300,
  grade: 70,
  gender: 'male',
};

for (const key in person) {
  console.log(key + ',' + person[key]);
}
