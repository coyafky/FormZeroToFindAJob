// 引入readline模块
const readline = require('readline');

// 创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 生成1到100之间的随机数
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 初始化变量
let guess;
let attempts = 0;

// 定义一个函数来获取用户输入
function getUserInput() {
  rl.question('Guess a number between 1 and 100: ', (input) => {
    guess = parseInt(input);

    // 检查输入是否有效
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('Please enter a valid number');
      getUserInput(); // 重新获取输入
      return;
    }

    // 增加尝试次数
    attempts++;

    // 使用if-else语句判断猜测结果
    if (guess === randomNumber) {
      console.log(
        `Congratulations, you guessed the number in ${attempts} attempts.`
      );
      rl.close(); // 关闭readline接口
    } else if (guess < randomNumber) {
      console.log('Too low, try again.');
      getUserInput(); // 重新获取输入
    } else {
      console.log('Too high, try again.');
      getUserInput(); // 重新获取输入
    }
  });
}

// 开始游戏
getUserInput();
