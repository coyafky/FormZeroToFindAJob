const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 输出：1 2 3 4 5

let n = Number(prompt("请输入一个数字"));

for(let i =1;i<=n;i++){
    if(n%i==0){
        console.log(i);
        
    }
}

for (let i =0;i<=100;i++){
  if(i%3==0&&i%5==0){
      console.log(i);
      
  }
}

for (let i=100;i<1000;i++){
  let i_str = i.toString();
  let a = Number(i_str.charAt(0))
  let b = Number(i_str.charAt(1))
  let c = Number(i_str.charAt(2))
  if(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)==i){
      console.log(i);
  }
}

let num = prompt('请输入数字');
let result =1
for(let i=num;i>=1;i++){
    result*=num;
}

console.log(result);

for (let a =0; a<=35 ;a++){
  for(let b =0; b<=35;b++){
      if(a+b ==35&&2*a+4*b== 94){
          console.log(a,b);
          
      }
  }
}