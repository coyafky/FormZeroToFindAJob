(function () {
  // 局部变量，不会泄露成全局变量

  var currentTime = new Date();

  // 设置时间显示
  function updateTime() {
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 格式化时间
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(hours + ':' + minutes + ':' + seconds);
  }

  // 初始化时间显示
  updateTime();

  // 设置定时器，每秒更新一次时间
  setInterval(function () {
    currentTime = new Date();
    updateTime();
  }, 1000);
})();
