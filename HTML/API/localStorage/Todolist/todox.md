### 本地存储 API 实际案例：待办事项列表

在这个实际案例中，我们将使用 HTML 本地存储 API（`localStorage`）来实现一个简单的待办事项列表。用户可以添加、删除和查看待办事项，这些待办事项将存储在本地浏览器中，即使用户关闭浏览器或重新打开页面，数据也不会丢失。

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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>待办事项列表</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>待办事项列表</h1>
      <form id="todo-form">
        <input
          type="text"
          id="todo-input"
          placeholder="添加待办事项"
          required
        />
        <button type="submit">添加</button>
      </form>
      <ul id="todo-list"></ul>
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

#todo-form {
  margin-bottom: 20px;
}

#todo-input {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
```

#### 4. 创建 JavaScript 文件

在项目根目录下创建一个名为 `script.js` 的文件，并在其中编写以下 JavaScript 代码：

```javascript
// 获取待办事项列表
function getTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  return todos;
}

// 保存待办事项列表
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 显示待办事项列表
function displayTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  const todos = getTodos();
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '删除';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
      deleteTodo(index);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// 添加待办事项
function addTodo(todo) {
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
  displayTodos();
}

// 删除待办事项
function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  displayTodos();
}

// 初始化应用
function init() {
  const todoForm = document.getElementById('todo-form');
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todo = todoInput.value.trim();
    if (todo) {
      addTodo(todo);
      todoInput.value = '';
    }
  });

  displayTodos();
}

init();
```

#### 5. 解释代码

##### 5.1 HTML 结构

- **`<div class="container">`**：包含应用的主要内容，如标题、表单和待办事项列表。
- **`<form id="todo-form">`**：用于添加新的待办事项。
- **`<input type="text" id="todo-input">`**：用于输入新的待办事项。
- **`<button type="submit">`**：用于提交表单，添加新的待办事项。
- **`<ul id="todo-list">`**：用于显示待办事项列表。

##### 5.2 CSS 样式

- **`body`**：设置页面布局，使内容居中显示。
- **`.container`**：设置应用容器的样式，如背景颜色、内边距、圆角和阴影。
- **`h1`**：设置标题的样式。
- **`#todo-form`**：设置表单的样式。
- **`#todo-input`**：设置输入框的样式。
- **`button`**：设置按钮的样式。
- **`ul`**：设置待办事项列表的样式。
- **`li`**：设置每个待办事项的样式。
- **`.delete-btn`**：设置删除按钮的样式。

##### 5.3 JavaScript 逻辑

- **`getTodos` 函数**：从 `localStorage` 中获取待办事项列表，如果 `localStorage` 中没有数据，则返回一个空数组。
- **`saveTodos` 函数**：将待办事项列表保存到 `localStorage` 中。
- **`displayTodos` 函数**：显示待办事项列表，为每个待办事项创建一个列表项，并添加删除按钮。
- **`addTodo` 函数**：添加新的待办事项到待办事项列表中，并保存到 `localStorage` 中。
- **`deleteTodo` 函数**：删除指定索引的待办事项，并保存到 `localStorage` 中。
- **`init` 函数**：初始化应用，为表单添加提交事件监听器，并在页面加载时显示待办事项列表。

#### 6. 运行应用

将 `index.html`、`styles.css` 和 `script.js` 文件保存到你的计算机上，然后在浏览器中打开 `index.html` 文件。你将看到一个简单的待办事项列表应用，可以添加、删除和查看待办事项。

### 总结

通过这个实战项目，你学习了如何使用 HTML 本地存储 API（`localStorage`）来实现一个简单的待办事项列表。通过合理的 HTML 结构、CSS 样式和 JavaScript 逻辑，我们创建了一个简单易用的待办事项列表应用。通过这个项目，你可以更好地理解本地存储 API 的使用方法，并掌握如何在实际应用中使用它。
