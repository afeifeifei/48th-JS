// index
function picChange(bool){
	let oN = bool;
	aLi[oNum].className = "";
	if(oN){
		oNum--;
		if(onOff){
			if(oNum<0){
				oNum = 5;
			}
		}else{
			if(oNum<0){
				oNum = 0;
			}	
		}
	}else{
		oNum++;
		if(onOff){
			if(oNum>5){
				oNum = 0;
			}
		}else{
			if(oNum>5){
				oNum = 5;
			}	
		}
	}
	aLi[oNum].className = "show";
	oTitle.innerHTML = oNum+1+"/6"
	oFoot.innerHTML = aImg[oNum].alt;
}