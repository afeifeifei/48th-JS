### JavaScript第二节课笔记

---



[TOC]



#### 一、.定义变量

##### 1. JS版本问题

1. ECMAScript   ES5 

- var
- function


```
var goudan = document.getElementById("wrap")
```



2. ECMAScript  ES6

- let
- const  （常量）
- function

  ES6编译工具：Babel工具打包https://www.babeljs.cn/

```php+HTML
let goudan = document.getElementById("wrap")
```

###### 	注：要么全部用ES5的规则定义变量，要么全部用ES6的规则定义变量

##### 2.定义变量名的规则

* 定义变量的时候，把变量名统一都放在前面
* 不能使用关键字/保留词
* 尽量不要使用JS里卖弄已经有意义的变量名	
* 组成名字的字符最好是 数字 字母 _ $ 四种，不能以数字开头
* 驼峰命名法



#### 二、数据类型	

JavaScript里面数据可分为6大类：基础类（undefined、number、string、boolean、null），复杂类（object）。

1. **undefined 未定义**

   任何一个定义出来没有赋值的变量，默认数据都是undefined 

2. **number 数字**

   123     10.1     0.3     .3      

3. **string 字符串**

   一对双引号 或者 一对单引号引起来的内容

   转义字符 `\`

   字符串的拼接

4. **boolean 布尔值**

   布尔值只包含两个  `true`  `false`

   布尔值就是布尔值，不是0 和 1，0 和 1 是数字，和布尔值没有直接的联系

5. **null 空**

   空的对象指针

6. **object 对象**



   - **数组 [ ]**一种特殊的对象，数据的组合，可以使用 [数字下标] 来取值；

   ```
   let x = [10,'1231','我是啊啊是打算打算打算']	
   let y = [18,[1],[2],[5]]   //二维数组 
   ```

   - **json {}** 空对象，除了继承JS原本的对象描述外，什么都没有的对象；

     ```
     let x = {
     	name:"阿飞",
     	age:20,
     	goudam:[10,20,1]
     	dachui:{x:52,y:55}
     	marry:false;
     }
     name //是属性 "阿飞"是值
     x.name //取值
     ```

   - **内置对象** JS已经规定好的对象，例如：`document` `window` 等等，太多了；
   - **节点对象** 这个前面接触的很多了；
   - **函数** 一个极特殊的对象，可以直接执行来运行内部的代码块。

   - **symbol ES6新增的一种数据类型**

