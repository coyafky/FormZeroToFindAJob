### Web Worker API

Web Worker API 允许在后台线程中运行 JavaScript 代码，从而不会阻塞主线程。这使得复杂的计算或长时间运行的任务可以在后台执行，而不会影响页面的响应性。

#### 1. 创建 Web Worker

要创建一个 Web Worker，可以使用 `Worker` 构造函数，并传入一个 JavaScript 文件的路径。

```javascript
// main.js
const worker = new Worker('worker.js');
```

#### 2. 发送消息

主线程可以通过 `postMessage` 方法向 Web Worker 发送消息。

```javascript
// main.js
worker.postMessage('Hello from main thread!');
```

Web Worker 可以通过监听 `message` 事件来接收消息。

```javascript
// worker.js
self.addEventListener('message', (event) => {
  console.log('Message received from main thread:', event.data);
});
```

#### 3. 接收消息

Web Worker 可以通过 `postMessage` 方法向主线程发送消息。

```javascript
// worker.js
self.postMessage('Hello from worker thread!');
```

主线程可以通过监听 `message` 事件来接收消息。

```javascript
// main.js
worker.addEventListener('message', (event) => {
  console.log('Message received from worker:', event.data);
});
```

#### 4. 终止 Web Worker

主线程可以通过 `terminate` 方法终止 Web Worker。

```javascript
// main.js
worker.terminate();
```

Web Worker 也可以通过 `close` 方法自行终止。

```javascript
// worker.js
self.close();
```

#### 5. 错误处理

主线程可以通过监听 `error` 事件来处理 Web Worker 中的错误。

```javascript
// main.js
worker.addEventListener('error', (event) => {
  console.error('Error in worker:', event);
});
```

#### 6. 示例：计算斐波那契数列

以下是一个使用 Web Worker 计算斐波那契数列的示例。

##### main.js

```javascript
const worker = new Worker('worker.js');

worker.addEventListener('message', (event) => {
  console.log('Fibonacci result:', event.data);
});

worker.postMessage(40); // 计算第 40 个斐波那契数
```

##### worker.js

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

self.addEventListener('message', (event) => {
  const result = fibonacci(event.data);
  self.postMessage(result);
});
```

#### 7. 总结

Web Worker API 允许在后台线程中运行 JavaScript 代码，从而不会阻塞主线程。通过 `postMessage` 和 `message` 事件，主线程和 Web Worker 之间可以进行通信。Web Worker 可以用于执行复杂的计算或长时间运行的任务，从而提高页面的响应性。



### 实际案例：使用 Web Worker 进行图像处理

在这个实际案例中，我们将使用 Web Worker 来处理图像。具体来说，我们将创建一个简单的图像处理应用，用户可以选择一张图像，然后使用 Web Worker 在后台线程中对图像进行灰度处理。

#### 1. 项目结构

```
project-root/
│
├── index.html
├── styles.css
├── main.js
└── worker.js
```

#### 2. 创建 HTML 文件

在项目根目录下创建一个名为 `index.html` 的文件，并在其中编写以下 HTML 代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图像处理</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>图像处理</h1>
        <input type="file" id="file-input" accept="image/*">
        <button id="process-button">处理图像</button>
        <div id="image-container">
            <img id="original-image" alt="原始图像">
            <img id="processed-image" alt="处理后的图像">
        </div>
    </div>
    <script src="main.js"></script>
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

#image-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

img {
    max-width: 45%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}
```

#### 4. 创建主线程 JavaScript 文件

在项目根目录下创建一个名为 `main.js` 的文件，并在其中编写以下 JavaScript 代码：

```javascript
const fileInput = document.getElementById('file-input');
const processButton = document.getElementById('process-button');
const originalImage = document.getElementById('original-image');
const processedImage = document.getElementById('processed-image');

let worker;

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

processButton.addEventListener('click', () => {
    if (originalImage.src) {
        if (worker) {
            worker.terminate();
        }
        worker = new Worker('worker.js');
        worker.postMessage(originalImage.src);

        worker.addEventListener('message', (event) => {
            processedImage.src = event.data;
        });
    }
});
```

#### 5. 创建 Web Worker JavaScript 文件

在项目根目录下创建一个名为 `worker.js` 的文件，并在其中编写以下 JavaScript 代码：

```javascript
self.addEventListener('message', (event) => {
    const imageUrl = event.data;
    processImage(imageUrl).then((processedImageUrl) => {
        self.postMessage(processedImageUrl);
    });
});

function processImage(imageUrl) {
    return new Promise((resolve) => {
        const canvas = new OffscreenCanvas(1, 1);
        const context = canvas.getContext('2d');
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                data[i] = avg; // red
                data[i + 1] = avg; // green
                data[i + 2] = avg; // blue
            }
            context.putImageData(imageData, 0, 0);
            const processedImageUrl = canvas.convertToBlob().then((blob) => {
                return URL.createObjectURL(blob);
            });
            resolve(processedImageUrl);
        };
    });
}
```

#### 6. 解释代码

##### 6.1 HTML 结构

- **`<input type="file" id="file-input" accept="image/*">`**：用于选择图像文件。
- **`<button id="process-button">处理图像</button>`**：用于触发图像处理。
- **`<img id="original-image" alt="原始图像">`**：显示原始图像。
- **`<img id="processed-image" alt="处理后的图像">`**：显示处理后的图像。

##### 6.2 CSS 样式

- **`.container`**：设置应用容器的样式，如背景颜色、内边距、圆角和阴影。
- **`#image-container`**：设置图像容器的样式，使原始图像和处理后的图像并排显示。
- **`img`**：设置图像的样式，如最大宽度、边框和圆角。

##### 6.3 主线程 JavaScript 逻辑

- **`fileInput.addEventListener('change', (event) => {...})`**：监听文件选择事件，读取选择的图像并显示在 `originalImage` 中。
- **`processButton.addEventListener('click', () => {...})`**：监听处理按钮点击事件，创建 Web Worker 并发送图像 URL 进行处理。
- **`worker.addEventListener('message', (event) => {...})`**：监听 Web Worker 的消息，接收处理后的图像 URL 并显示在 `processedImage` 中。

##### 6.4 Web Worker JavaScript 逻辑

- **`self.addEventListener('message', (event) => {...})`**：监听主线程的消息，接收图像 URL 并调用 `processImage` 函数进行处理。
- **`processImage(imageUrl)`**：使用 `OffscreenCanvas` 对图像进行灰度处理，并将处理后的图像转换为 Blob URL 返回给主线程。

#### 7. 运行应用

将 `index.html`、`styles.css`、`main.js` 和 `worker.js` 文件保存到你的计算机上，然后在浏览器中打开 `index.html` 文件。你将看到一个简单的图像处理应用，可以选择图像并使用 Web Worker 在后台线程中进行灰度处理。

### 总结

通过这个实际案例，我们学习了如何使用 Web Worker API 在后台线程中处理图像，从而不会阻塞主线程。通过 `postMessage` 和 `message` 事件，主线程和 Web Worker 之间可以进行通信。Web Worker 可以用于执行复杂的计算或长时间运行的任务，从而提高页面的响应性。