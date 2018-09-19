// index
function textChange(bool){
	let oN = bool;
	if(oN){
		n++;
		if(n>32){
			alert("已经是最大的字了!!!");
			n = 32;
		}
	}else{
		n--;
		if(n<12){
			alert("已经是最小的字了!!!");
			n = 12;
		}
	}
	oBox.style.fontSize = n+"px";
}