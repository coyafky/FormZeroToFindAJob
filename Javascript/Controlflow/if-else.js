let cheese = 'Cheddar';
if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}


let num = Number(prompt("请输入一个数字"));

// 对用户的输入的数字进行合法性的验证

if (!isNaN(num) && 100 <= num && num <= 999) {
    // 当用户的输入的数字是合法的

    // let a = Math.floor(num/100);
    // console.log(a);

    // let b = Math.floor(num/10%10);
    // console.log(b);

    // let c = num%10;

    // console.log(c);

    let numstr = num.toString();
    let a = Number(numstr.charAt(0));
    let b = Number(numstr.charAt(1));
    let c = Number(numstr.charAt(2));

    if (add(a, b, c) == num) {
        alert("是水仙花数");
    } else {
        alert("不是水仙花数");
    }

}
else {
    alert("请输入合法的数字");
}