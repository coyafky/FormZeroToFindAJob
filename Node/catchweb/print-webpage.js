const puppeteer = require('puppeteer');

async function printWebpage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://juejin.cn/post/7128203680200785951', {
    waitUntil: 'networkidle2', // 等待页面加载完成
  });
  await page.pdf({ path: 'juejin2.pdf', format: 'A4', });
  await browser.close();
}
// 调用函数
printWebpage();
