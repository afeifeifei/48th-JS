let aP = document.querySelectorAll("#wrap p"),
	aBtn = document.querySelectorAll("#wrap button"),
	obj = ["21px","22px","23px","24px","25px"],
	add=0,
	sub=0;
	aBtn[0].onclick = function () {
		aP[0].style.fontSize = obj[add];
		add++;
		if (add >=obj.length) {
			add = obj.length-1;	
		};
		if (add>=0){
			sub = add-1;
		};
	};
	aBtn[1].onclick = function () {
		sub--;
		aP[0].style.fontSize = obj[sub];
		if (sub<0) {
			aP[0].style.fontSize = "20px";
			sub=0;
			add= sub;
		};
	};	