## 认识JavaScript（ES5）

#### 1. 学前准备

扎实的DIV+CSS基础；

开发工具（趁手就行）；

静下心，多动脑筋 - JavaScript会很枯燥，因为短时间看不到成效，也没有一个视觉上的表现能证明你学到了什么，我们需要做的就是静下心打好基础，多动脑筋培养自己的逻辑性；

#### 2. 学习方法

- **上课时间：**周12 456 正式课。周三、周日为做作业的时间，后期如在这两天补课会另行通知大家；
- **主讲老师：**大家各自的群里都能在管理员列表看到我的！
- **作业提交：**邮箱 tanzhou_fly@qq.com ；格式按照课上给大家规定的格式来；
- **交流探讨：**这个很重要，多在群里互动，多和其他同学交流技术（注意是交流技术，不是交流黄图），从别人的问题中吸取经验，比你一个人去遇到所有问题要快捷的多。

#### 3. 基础问题

- **JavaScript（JS）是啥有啥用？** 专业一点：JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言。通俗一点：JS是前端代码中最重要的部分（行为层），常用来操作HTML页面，响应用户的操作，验证传输数据等。
- **Java和JavaScript有啥关系？**没关系，就这样。
- **jQuery（JQ）和JavaScript有啥关系** jQuery是由JS编写成的一个JS库。

#### 4. JS代码写在哪里

和css类似，js可以写在HTML页面中，也可以从外部引入，还可以写在标签中；

- **页面中：** `<script></script>` 标签里面，标签里面可以加 type="text/javascript" 或者 language="javacript"；要么不加，要么必须写对；
- **外部引入：** `<script src="js文件路径">` ；
- **标签中：** 例如 `<body onclick="alert('Hello World!')"></body>` ；

标签里面的JS很不方便，用的非常的少，一般我们直接写入script标签或者外部引入；

#### 5. 写JS代码需要注意什么

- 严格区分大小写；
- 语法字符半角字符；（字符串里面可以是任意字符）
- 完整语句后面 **;** 结束符；（当然也有有人推荐不需要加分号结束符，看个人或团队开发习惯而定）
- 缩进对齐。

#### 6. 注释

```javascript
// 单行注释

/*
多行注释
*/
```

#### 7. 弹窗与调试

- 常用调试方式 `alert( "内容" )` , `console.log( "内容" )`;
- 几种不怎么好看的系统弹窗示例： `alert("你好")`、`confirm("确定？")` 、`prompt("请输入您的姓名：")`。

#### 8. 示例

1. **响应用户操作的示例：**

```javascript
document.getElementById("goudan").onclick = function(){
    alert("点我干嘛啊！");
}
```

对象 . 事件 = 函数；   当这个对象被点击的时候，触发后面的这个函数；

`document.getElementById("goudan")` 找到id叫做goudan的标签；

`.`可以理解为 “的”；

`onclick`是事件，给这个对象绑定一个事件，事件有很多种，onclick是单击事件；

`function(){}`是函数，就是事件发生后，需要执行一些什么代码。

2. **改变HTML内容的示例**

```JavaScript
document.getElementById("goudan").innerHTML = "我是狗蛋";
```

修改ID为goudan的标签的内容。

3. **综合一个**

```javascript
document.getElementById("goudan").onclick = function(){
    document.getElementById("goudan").innerHTML = "我是狗蛋";
}
```

点击 "狗蛋" 时，改变它的HTML内容。

#### 9. 声明变量

以前学数学时，`x=2  y=3    z=x+y`，这种案例我们肯定接触过，这里的xyz其实就是变量，JS里面也可以通过这种方式赋予一个词对应的值。

上面例子`document.getElementById("goudan")`重复了多次，略显蛋疼，我们可以声明一个变量讲获取的goudan存起来，这样下次就可以不用重复获取了，直接使用这个变量。

```javascript
var goudan = document.getElementById("goudan");
goudan.onclick = function(){
   goudan.innerHTML = "我是狗蛋";
}
```

再比如，`alert(a)`是弹窗弹不出a的，会报错，因为这个a会被认为是变量a，而如果我们不定义这个变量就直接用的话，就会报错`"a is not defined"`；要弹出a，应该使用`alert("a")`，将a用一对双引号（或者一对单引号）引起来，变成字符串，这样就能弹出，字符串是一种数据类型，我们后面会讲到。

#### 10. 变量命名规则

- 严格区分大小写；
- 只能包含 **字母 数字 _ $** 四大类，且不能以数字开头；
- 不能使用 关键词/保留词/已有的API；
- 见名知意。

```js
var a; //声明不赋值

var b = 20; //声明再赋值

var c = 2+1; //声明再运算赋值

var b = 10; //同层级多次重复声明是没有意义的，只需要var一次就可以了	
```

PS：可能聪明的你发现，我用中文当做变量居然可以哦！但是请不要这么用，不是所有解析器都能给你正确的解析的。稳一点，别浪。

#### 11. 获取元素的几种常用方式

```js
document.getElementById() //通过ID获取，获取某一个元素，全浏览器兼容
document.getElementsByClassName() //通过class名获取，获取的是一组元素，不支持IE8及以下
document.getElementsByTagName() //通过标签名获取，获取的是一组元素，全浏览器兼容
document.getElementsByName() //通过name获取，获取的是一组元素，一般少用，全浏览器兼容

document.querySelector() //通过css选择器获取，获取第一个元素，支持IE8及以上
document.querySelectorAll() //通过css选择器获取，获取所有满足这个选择器的一组元素，支持IE8及以上
```

```js
//几个特殊标签可以这样获取

//HTML标签
document.documentElement

//head标签
document.head

//title标签
document.title

//body标签
document.body
```



当然这只是通过document.xxx的形式获取元素的，还有很多其他的获取元素的方式，后面我们会再讲到。

#### 12. 事件

了解一些基础的事件：

**鼠标事件：** `onclick 左键单击` `ondblclick 左键双击` `onmouseover onmouseenter 鼠标移入` `onmouseout onmouseleave鼠标移出` `onmousedown 鼠标按下` `onmousmove 鼠标移动` `onmouseup 鼠标抬起` `oncontextmenu 右键单击`；

**键盘事件：** `onkeydown onkeypress 键按下` `onkeyup 键抬起`；

**系统事件：** `onload 加载完成后` `onerror 加载出错后` `onresize 窗口调整大小时` `onscroll 滚动时` ；

**表单事件：** `onfocus 获取焦点后` `onblur 失去焦点后` `onchange 改变内容后` `onreset 重置后` `onselect 选择后` `onsubmit 提交后`。

#### 13. 操作元素的内容

`.innerHTML` 获取/修改 元素的HTML内容，

`.innerText` 获取/修改 元素的文本内容。（PS：老版本FF不支持这个属性，使用 `.textContent` 代替）

#### 14. 案例 or 作业

[hover伪类做不了的效果](https://afeifeifei.github.io/class-demo/js-demo/2-01-01/)

