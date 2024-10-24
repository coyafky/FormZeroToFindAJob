# HTML ListTag

主要说的是 HTML 中的 列表标签问题  [  更多添加了  （属性）]

List Tag 主要分为  

- 有序列表（ordered list）从英文名也可以看出 简写是  （ol ）
- 无序列表 （unordered list） （ul）
- 自定义列表 (descripttions list ) （dl ）



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>unorder list</h1>
    <ul>
      <li>apple</li>
      <li>orange</li>
      <li>banana</li>
      <li>mango</li>
    </ul>

    <h1>ordered list</h1>
    <ol type="a">
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>

    <h1>descripttions list</h1>
    <dl>
      <dt>html</dt>
      <dd>html is a markup language</dd>
      <dt>css</dt>
      <dd>css is a style sheet language</dd>
      <dt>javascript</dt>
      <dd>javascript is a programming language</dd>
    </dl>
    <h2>A Description List</h2>
    <dl>
      <dt>Coffee</dt>
      <dd>- 500 gms</dd>
      <dt>Milk</dt>
      <dd>- 1 ltr Tetra Pack</dd>
    </dl>
  </body>
</html>

```



最基本的HTML List tag



### Ol 有序列表



Ol 基本展示

有序列表中 存在 属性 分别是 type ,reserved  start

Type 说明，排序的方式 是（type ="A" |A,B,C| ） (type ='a' |a,b,c| ) ( type ='1' |1,2,3|(这个也是默认的情况了))

Reserved 顾名思义就是 把这个列表给 逆转

start  表示 从 start 开始的字符 后 排序 （比如 start = 5 [列表项 排序是 6,7,8]）

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>HTML order list</h1>
    <p>orderlist Attribute</p>

    <ol type="1">
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>

    <ol type="a">
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ol>

    <ol type="A">
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ol>

    <ol type="i">
      <li>i</li>
      <li>ii</li>
      <li>iii</li>
    </ol>

    <p>ordered list reserved</p>
    <ol reversed>
      <li>HTML</li>
      <li>CSS</li>
      <li>javascript</li>
    </ol>

    <p>ordered list start</p>
    <ol start="5">
      <li>HTML</li>
      <li>CSS</li>
      <li>javascript</li>
    </ol>
  </body>
</html>

```





最后是 列表 Tag中会出现 嵌套的情况 ，这个也是非常常见的



```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>List embed</title>
  </head>
  <body>
    <ol>
      <li>first item</li>
      <li>
        second item
        <ol>
          <li>second item first child</li>
          <li>second item second child</li>
          <li>second item third child</li>
        </ol>
      </li>

      <li>
        third item
        <ul>
          <li>third item first child</li>
          <li>third item second child</li>
          <li>third item third child</li>
        </ul>
      </li>
    </ol>
  </body>
</html>

```



