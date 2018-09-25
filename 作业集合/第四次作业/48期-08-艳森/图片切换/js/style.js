let btn_left = document.getElementById('left');
let btn_right = document.getElementById('right');
let h_num = document.getElementById('h-num');
let b_name = document.getElementById('b-name');
let btn1 = document.getElementsByClassName('btn')[0];
let btn2 = document.getElementsByClassName('btn')[1];
let li = document.querySelectorAll('li');
let arr = ["林黛玉","薛宝钗","王熙凤","元春","迎春","探春","惜春","史湘云","李纨","妙玉","秦可卿","巧姐"];
let tab = document.querySelectorAll(".wp-btn .btn");

tab.idx = 0 //用来记录tab上次是哪个子元素被选中

 for(let i = 0; i < tab.length; i++){
 	tab[i].onclick = function () {
 		//去掉上一个选中的对象的 on
         tab[tab.idx].className = "btn"
         tab.idx = i
         //给自己加上 on
         tab[i].className = "btn btn1 on"
 	}
 }

let num = 0;

btn_left.onclick = function(){
    if(num>0){
    	num--;
        console.log(num);
        for(let i = 0;i< 12; i++){
        	li[i].style.display= 'none';
        }
        li[num].style.display = 'block';
         h_num.innerHTML = num+1;
         b_name.innerHTML = arr[num];	
    }
    else if(tab[1].className != 'btn'){
        	li[11].style.display = 'block';
    	li[0].style.display = 'none';
    	num = 11;
    	h_num.innerHTML = 12;
    	b_name.innerHTML = arr[11];
        }

     
}

btn_right.onclick = function(){    
	if(num<=10){
		num++;
        console.log(num);
        for(let i = 0;i< 12; i++){
        	li[i].style.display= 'none';
        }
        li[num].style.display = 'block';
        h_num.innerHTML = num+1;
        b_name.innerHTML = arr[num];	
    }
    else if(tab[1].className != 'btn'){
    		li[11].style.display = 'none';
    	li[0].style.display = 'block';
    	num = 0;
    	h_num.innerHTML = 1;
    	 b_name.innerHTML = arr[0];
    	}
    
}


