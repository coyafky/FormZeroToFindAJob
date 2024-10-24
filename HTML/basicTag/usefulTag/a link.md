# a link

a元素是，定义超链接，用于打开新的URL



a 元素的 用途1 在本地页面进行跳转 （内部跳转）



![截屏2024-10-24 16.47.06](/Users/coya/Library/Application Support/typora-user-images/截屏2024-10-24 16.47.06.png)



a 元素 图片报告 打开新链接



![截屏2024-10-24 16.48.27](/Users/coya/Library/Application Support/typora-user-images/截屏2024-10-24 16.48.27.png)









链接的语法格式 `<a href="跳转目标" target="目标窗口的弹出方式"> 文本或图像 </a>`



a元素的 属性：



1. href：用于指定链接目标的url地址 （Hypertext(超文本)Reference 简称），也可以是一个本地地址
2. target:用于指定链接页面的打开方式 _self默认值  （本窗口打开新的网页） _blank(英文名是 空白)（新窗口打网页）
3. \#：空链接

**链接分类：**

1. 外部链接: 例如 `< a href="http:// www.baidu.com "> 百度</a >`
2. 内部链接:网站内部页面之间的相互链接. 直接链接内部页面名称即可，例如:`< a href="index.html"> 首页 </a >`
3. 空链接: 如果当时没有确定链接目标时， `< a href="#"> 首页 </a >`
4. 下载链接: 如果 href 里面地址是一个文件或者压缩包，会下载这个文件。
5. 网页元素链接: 在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接。
6. 锚点链接: 点我们点击链接,可以快速定位到页面中的某个位置。 +在链接文本的 href 属性中，设置属性值为 #名字 的形式，如`<a href="#two"> 第2集 </a>` +找到目标位置标签，里面添加一个 id 属性 = 刚才的名字 ，如

```
<h3 id="two">第2集介绍</h3>
<a href="#two"> 第2集 </a>
<h3 id="two">第2集介绍</h3>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Links Example</title>
</head>
<body>
    <h1>HTML Links Example</h1>
    
    <h2>外部链接</h2>
    <a href="<http://www.baidu.com>" target="_blank">百度</a>
    
    <h2>内部链接</h2>
    <a href="index.html">首页</a>
    
    <h2>空链接</h2>
    <a href="#">首页</a>
    
    <h2>下载链接</h2>
    <a href="files/example.zip">下载文件</a>
    
    <h2>网页元素链接</h2>
    <p><a href="<http://www.example.com>">点击这里</a></p>
    <a href="<http://www.example.com>">
        <img src="image.jpg" alt="Example Image">
    </a>
    <p><a href="audio/example.mp3">播放音频</a></p>
    <p><a href="video/example.mp4">播放视频</a></p>
    
    <h2>锚点链接</h2>
    <a href="#section2">跳转到第2节</a>
    
    <h2 id="section2">第2节内容</h2>
    <p>这里是第2节的内容...</p>
</body>
</html>
```