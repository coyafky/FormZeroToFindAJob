### 实战项目：基于地理 API 的天气预报应用

在这个实战项目中，我们将创建一个简单的天气预报应用，使用地理 API 获取用户的地理位置，并根据位置信息显示当前天气。我们将使用 HTML、CSS 和 JavaScript 来实现这个应用。

#### 1. 项目结构

```
project-root/
│
├── index.html
├── styles.css
└── script.js
```

#### 2. 创建 HTML 文件

在项目根目录下创建一个名为 `index.html` 的文件，并在其中编写以下 HTML 代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>天气预报</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>天气预报</h1>
        <div id="location">正在获取位置...</div>
        <div id="weather">正在获取天气...</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### 3. 创建 CSS 文件

在项目根目录下创建一个名为 `styles.css` 的文件，并在其中编写以下 CSS 代码：

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-top: 0;
}

#location, #weather {
    margin-bottom: 20px;
}
```

#### 4. 创建 JavaScript 文件

在项目根目录下创建一个名为 `script.js` 的文件，并在其中编写以下 JavaScript 代码：

```javascript
// 获取用户的地理位置
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location').innerHTML = 'Geolocation is not supported by this browser.';
    }
}

// 显示用户的位置
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('location').innerHTML = `纬度: ${latitude}, 经度: ${longitude}`;
    getWeather(latitude, longitude);
}

// 显示错误信息
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').innerHTML = '用户拒绝了位置请求';
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').innerHTML = '位置信息不可用';
            break;
        case error.TIMEOUT:
            document.getElementById('location').innerHTML = '请求位置超时';
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').innerHTML = '未知错误';
            break;
    }
}

// 获取天气信息
function getWeather(latitude, longitude) {
    const apiKey = '7d06732cee160fb0e00f3ed8526f222d'; // 替换为你的 OpenWeatherMap API 密钥
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById('weather').innerHTML = `天气: ${weather}, 温度: ${temperature}°C`;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = '获取天气信息失败';
            console.error(error);
        });
}

// 初始化应用
getLocation();
```

#### 5. 解释代码

##### 5.1 HTML 结构

- **`<div class="container">`**：包含应用的主要内容，如标题、位置信息和天气信息。
- **`<div id="location">`**：用于显示用户的地理位置。
- **`<div id="weather">`**：用于显示当前天气信息。

##### 5.2 CSS 样式

- **`body`**：设置页面布局，使内容居中显示。
- **`.container`**：设置应用容器的样式，如背景颜色、内边距、圆角和阴影。
- **`h1`**：设置标题的样式。
- **`#location` 和 `#weather`**：设置位置和天气信息的样式。

##### 5.3 JavaScript 逻辑

- **`getLocation` 函数**：使用 `navigator.geolocation.getCurrentPosition` 方法获取用户的地理位置，并在成功时调用 `showPosition` 函数，在失败时调用 `showError` 函数。
- **`showPosition` 函数**：显示用户的纬度和经度，并调用 `getWeather` 函数获取天气信息。
- **`showError` 函数**：根据错误代码显示相应的错误信息。
- **`getWeather` 函数**：使用 OpenWeatherMap API 获取当前天气信息，并在页面上显示天气描述和温度。
- **`getLocation` 函数**：在页面加载时调用，初始化应用。

#### 6. 运行应用

将 `index.html`、`styles.css` 和 `script.js` 文件保存到你的计算机上，然后在浏览器中打开 `index.html` 文件。你将看到一个简单的天气预报应用，显示用户的地理位置和当前天气。

#### 7. 获取 OpenWeatherMap API 密钥

为了使天气预报功能正常工作，你需要在 `script.js` 文件中替换 `YOUR_API_KEY` 为你自己的 OpenWeatherMap API 密钥。你可以通过以下步骤获取 API 密钥：

1. 访问 [OpenWeatherMap](https://openweathermap.org/) 网站。
2. 注册一个免费账户。
3. 登录后，在 API 密钥页面生成一个新的 API 密钥。
4. 将生成的 API 密钥替换 `script.js` 文件中的 `YOUR_API_KEY`。

### 总结

通过这个实战项目，你学习了如何使用地理 API 获取用户的地理位置，并根据位置信息显示当前天气。通过合理的 HTML 结构、CSS 样式和 JavaScript 逻辑，我们创建了一个简单易用的天气预报应用。通过这个项目，你可以更好地理解地理 API 的使用方法，并掌握如何在实际应用中使用它。