# 第三课----js数据类型

### 1.定义变量

##### 	let   var   const 

​	let   x = document.getElementById("wrap");

------



### 2.js版本问题

##### 	1)ECMAScript   	

##### 	2)ES5 

​	var		function 

##### 	3)ES2015------ES6

​	let(变量)	 	const(常量)		function(函数)		

​	新版本使用变量关键词   let

​	let   	a= 10;

------

## 注意:

###### 	注: <u>babel编译器</u>可以将ES6转化成低版本的js代码 [](https://www.babeljs.cn/)

###### 注:要么全部用ES6规则,要么用ES5规则,不可以混合着用

###### 注:定义变量时,把变量名统一放到一起,**放在最前面**

###### 注:定义变量时,变量名不可以是关键词/保留词

###### 注:定义变量时,变量名不可以是js中已经有意义的词(如alert)

###### 注:定义变量时,最好使用	数字  字母  _  $ 四种,不能以数字开头

###### 注:定义变量时,要	见名知意		驼峰命名法

------



### 3.数据类型

​	1)**number** 		数字		如 let  a = 10;

​	2)**string** 		字符串  		如 let  x = "10";    let x = '10';	let  x =  abc;

​							let x = '456';   模板字符串  ES6中新的字符串定义方式

​	3**)Boolean** 		布尔值		let x = ture;		let  x = false;

​	4)**undefined** 	未定义		let x = undefined;					

​	5)**null**			空

​	6)**symbol**		独一无二的    	ES6新增的一种数据类型

​							如 let x = symbol(123); 	let y = symbol(123); 表示两个不同的值

​	7)**object** 		对象		如 let arr = [];	arr数组,也是对象的一种

###### 	注:const 常量定义时,必须进行初始化赋值		

```
多维数组:
    let x =[	10,
            "张三",
            [1,"李四"],
            null
            ];

    要得到李四: 		console.log(x[2 ][0])
```

```
对象:	(键值对)

let person = {
    name: "张三",
    age : 25,
    sex : "男",
    say : function (){
        console.log("hello world");
    }
};

要得到obj的性别:	1)console.log(person.sex);		点方法
				2)console.log(person["sex"]);	方括号方法(方括号中必须写成字符串)
```

