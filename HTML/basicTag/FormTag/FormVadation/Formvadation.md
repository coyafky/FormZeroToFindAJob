### 表单验证案例

在这个案例中，我们将使用 HTML5 的表单验证属性来验证用户输入。我们将创建一个简单的注册表单，并使用 `validity` 对象来检查输入是否有效。如果输入无效，我们将使用 `setCustomValidity()` 方法设置自定义错误消息，并通过 `invalid` 事件处理程序阻止表单提交。

#### 1. 创建 HTML 文件

在项目根目录下创建一个名为 `index.html` 的文件，并在其中编写以下 HTML 代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>表单验证</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>注册表单</h1>
      <form id="registration-form">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            pattern="[a-zA-Z0-9]{4,12}"
          />
          <span class="error" id="username-error"></span>
        </div>
        <div class="form-group">
          <label for="email">电子邮件:</label>
          <input type="email" id="email" name="email" required />
          <span class="error" id="email-error"></span>
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minlength="8"
          />
          <span class="error" id="password-error"></span>
        </div>
        <div class="form-group">
          <label for="confirm-password">确认密码:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
          <span class="error" id="confirm-password-error"></span>
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

#### 2. 创建 CSS 文件

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

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error {
  color: red;
  font-size: 12px;
  display: none;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
```

#### 3. 创建 JavaScript 文件

在项目根目录下创建一个名为 `main.js` 的文件，并在其中编写以下 JavaScript 代码：

```javascript
document
  .getElementById('registration-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  resetErrors();

  if (!validateUsername(username)) return;
  if (!validateEmail(email)) return;
  if (!validatePassword(password)) return;
  if (!validateConfirmPassword(confirmPassword, password)) return;

  alert('注册成功！');
}

function validateUsername(username) {
  if (username.validity.valueMissing) {
    setError(username, '用户名不能为空');
    return false;
  }
  if (username.validity.patternMismatch) {
    setError(username, '用户名必须为 4 到 12 位的字母或数字');
    return false;
  }
  return true;
}

function validateEmail(email) {
  if (email.validity.valueMissing) {
    setError(email, '电子邮件不能为空');
    return false;
  }
  if (email.validity.typeMismatch) {
    setError(email, '请输入有效的电子邮件地址');
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.validity.valueMissing) {
    setError(password, '密码不能为空');
    return false;
  }
  if (password.validity.tooShort) {
    setError(password, '密码必须至少 8 个字符');
    return false;
  }
  return true;
}

function validateConfirmPassword(confirmPassword, password) {
  if (confirmPassword.validity.valueMissing) {
    setError(confirmPassword, '确认密码不能为空');
    return false;
  }
  if (confirmPassword.value !== password.value) {
    setError(confirmPassword, '密码不匹配');
    return false;
  }
  return true;
}

function setError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  input.setCustomValidity(message);
}

function resetErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach((error) => {
    error.textContent = '';
    error.style.display = 'none';
  });
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.setCustomValidity('');
  });
}
```

#### 4. 解释代码

##### 4.1 HTML 结构

- **`<form id="registration-form">`**：创建一个注册表单，包含用户名、电子邮件、密码和确认密码字段。
- **`<input type="text" id="username" name="username" required pattern="[a-zA-Z0-9]{4,12}">`**：用户名字段，要求输入 4 到 12 位的字母或数字。
- **`<input type="email" id="email" name="email" required>`**：电子邮件字段，要求输入有效的电子邮件地址。
- **`<input type="password" id="password" name="password" required minlength="8">`**：密码字段，要求至少 8 个字符。
- **`<input type="password" id="confirm-password" name="confirm-password" required>`**：确认密码字段，要求与密码字段匹配。
- **`<span class="error" id="username-error"></span>`**：用于显示用户名字段的错误消息。
- **`<span class="error" id="email-error"></span>`**：用于显示电子邮件字段的错误消息。
- **`<span class="error" id="password-error"></span>`**：用于显示密码字段的错误消息。
- **`<span class="error" id="confirm-password-error"></span>`**：用于显示确认密码字段的错误消息。

##### 4.2 CSS 样式

- **`.container`**：设置表单容器的样式，如背景颜色、内边距、圆角和阴影。
- **`.form-group`**：设置表单组的样式，如下边距。
- **`label`**：设置标签的样式，如显示方式和下边距。
- **`input`**：设置输入框的样式，如宽度、内边距、边框和圆角。
- **`.error`**：设置错误消息的样式，如颜色、字体大小和显示方式。
- **`button`**：设置按钮的样式，如内边距、背景颜色、文本颜色、边框、圆角和光标。

##### 4.3 JavaScript 逻辑

- **`document.getElementById('registration-form').addEventListener('submit', function(event) {...})`**：监听表单提交事件，阻止默认提交行为，并调用 `validateForm` 函数进行表单验证。
- **`validateForm`**：验证表单中的每个字段，如果验证失败，返回 `false` 并显示错误消息。
- **`validateUsername`**：验证用户名字段，检查是否为空或不符合正则表达式。
- **`validateEmail`**：验证电子邮件字段，检查是否为空或不符合电子邮件格式。
- **`validatePassword`**：验证密码字段，检查是否为空或长度不足。
- **`validateConfirmPassword`**：验证确认密码字段，检查是否为空或与密码字段不匹配。
- **`setError`**：设置错误消息，并使用 `setCustomValidity` 方法设置自定义验证消息。
- **`resetErrors`**：重置所有错误消息和自定义验证消息。

#### 5. 运行应用

将 `index.html`、`styles.css` 和 `main.js` 文件保存到你的计算机上，然后在浏览器中打开 `index.html` 文件。你将看到一个简单的注册表单，尝试提交无效的表单数据，查看错误消息的显示。

### 总结

通过这个案例，我们学习了如何使用 HTML5 的表单验证属性来验证用户输入。通过 `validity` 对象和 `setCustomValidity` 方法，我们可以检查输入是否有效，并设置自定义错误消息。通过合理的 HTML 结构、CSS 样式和 JavaScript 逻辑，我们创建了一个简单易用的注册表单，并实现了表单验证功能。
