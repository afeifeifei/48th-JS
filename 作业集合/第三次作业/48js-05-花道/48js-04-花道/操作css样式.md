# 操作css样式

#### 1.js操作css

- 内部样式表 `用得少`

  ~~~javascript
  let oCss = document.getElementsByClassName("style");
  oCss[0].innerHTML = "#wrap{width:100px;height:100px;background-color:pink;}";
  ~~~

- 行内样式

~~~html
<div style="" id="wrap" class="box" title="我是一个DIV">123456</div>
<script>
        /*合法的标签属性直接 . 操作*/
        let oDiv = document.getElementById("wrap");
        oDiv.title = "goudan";
        oDiv.className = "goudan"; //class需要用className代替

        /*认人不认名*/
        oDiv.id = "goudan";//此时 id名被改为goudan
        oDiv.innerHTML = "987654321";//但是可以继续操作用id=wrap获取的oDiv对象

        /*因为oDiv=document.getElementById("wrap")获取的是对象本身，改了id名
        但是对象并没有变化*/	

        /*
         * 合法标签属性
        *    - style 这个属性非常特殊
        *            一个节点对象的style属性是 存储着这个节点所有行内样式的 对象
         */
        oWrap.innerHTML += '456';
        oWrap.style += "height:100px;background-color:pink"; //不能够这样

        /*
        驼峰法:操作复合样式的时候，去掉 - 号，后面的第一个字母大写
        */
        oWrap.style.backgroundColor = "pink";
    </script>

~~~



~~~html
<!--常用操作css样式的方式-->
<!--方式1-->
<script>
    oWrap.style.height = "100px";
    oWrap.style.backgroundColor = 'pink';
    oWrap.style.border = "5px solid #999";
    console.log(oWrap.style);
    //.style.cssText获取style""之间的内容，可以使用.cssText一次性操作多个样式
    oWrap.style.cssText += "height:150px;background-color:pink;border:5px solid #999";
    console.log(oWrap.style.cssText);   
</script>
<!--方式2 先在头部写好css样式，然后用.className = ""给标签写入class名-->
<style>
    #wrap.box{
        height: 10px;
        width: 40px;
    }
</style>
<body>
    <div style="" id="wrap" title="我是一个DIV">123456</div>
    <script>
        oWrap.className += " box";  
    </script>
</body>

~~~

#### 2.自定义标签属性

~~~html
<div id="wrap" goudan="789"></div>
<script>
    /*
    * 自定义的标签属性：
    *   - getAttribute() 获取自定义标签属性
    *   - setAttribute() 设置
    *   - removeAttribute() 删除
    *
    * 这三个方法不仅仅可以操作自定义标签属性，还可以操作合法标签属性，
    * 但是我们一般不会用他们来操作合法标签属性
    */
    //获取自定义标签属性
    console.log( oWrap.getAttribute("afei") );
    //设置自定义标签属性
    oWrap.setAttribute("goudan" , "456");
    //移除
    oWrap.removeAttribute("goudan");
    oWrap.setAttribute("id" , "erha");
</script>>

~~~

#### 3.获取标签内容

~~~html
<div id="wrap" goudan="789"></div>
<script>
    /*
    .innerHTML
	.innerText   火狐低版本 .textContent
	.value
	*/
    oWrap.innerHTML = '<b>二哈</b>真纯！';//可以解析<b>标签
    oWrap.innerText = '<b>二哈</b>真纯！';//不能解析，<b>标签最后以文本出现
    
    let oInp = document.getElementById("inp");
    document.getElementById("btn").onclick = function(){
    	alert( oInp.value );
    }
</script>>
~~~

