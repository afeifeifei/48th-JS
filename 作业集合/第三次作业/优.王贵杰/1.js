let oText = document.getElementsByClassName("text");
let oButton = document.getElementsByClassName("button");
let oUl = document.getElementsByTagName("ul");
	oButton[0].onclick = function(){
		oUl[0].innerHTML += "<li>" + oText[0].value + "</li>";
		oText[0].value = '';
	};