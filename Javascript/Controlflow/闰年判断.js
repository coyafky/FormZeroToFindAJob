let year = 2012;

if ((year % 4 && year % 100 != 0) || year % 400 == 0) {
  console.log('是闰年');
} else console.log('不是瑞年');
