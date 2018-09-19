let oImg = document.querySelectorAll("#wrap .photo")[0],
	oNext = document.querySelectorAll("#wrap .content .next")[0],
	oPrev = document.querySelectorAll("#wrap .content .prev")[0],
	oTitle = document.querySelectorAll("#wrap .content .title")[0],
	oText = document.querySelectorAll("#wrap .content .text")[0],
	oNormal = document.querySelectorAll("#wrap .btn .normal")[0],
	oAgain = document.querySelectorAll("#wrap .btn .again")[0],
	obj = ["立春解冻","清明雨上","立秋凉风至","立冬始冰","小雪虹藏"],
	next=0,
	prev=0;
	oNext.onclick = function () {
		next++;
		if (next>=obj.length-1) {
			next = obj.length-1;
		};
		oImg.src = 'images/'+next+".jpg";
		oTitle.innerHTML = next + 1 + "/5";
		oText.innerHTML = obj[next];
		if (next>0) {
			prev = next;
		};
	};
	oPrev.onclick = function () {
		prev--;
		if (prev <= 0) {
			prev = 0;
			next = prev;
		}
		oImg.src = 'images/'+prev+".jpg";
		oTitle.innerHTML = prev + 1 + "/5";
		oText.innerHTML = obj[prev];
	};
	oNormal.onclick = function(){
		oAgain.removeAttribute("class");
		oNormal.setAttribute("class","normal");
		oAgain.setAttribute("class","again");
			oNext.onclick = function () {
			next++;
			if (next>=obj.length-1) {
				next = obj.length-1;
			};
			oImg.src = 'images/'+next+".jpg";
			oTitle.innerHTML = next + 1 + "/5";
			oText.innerHTML = obj[next];
			if (next>=0) {
				prev = next;
			};
		};
		oPrev.onclick = function () {
			prev--;
			if (prev <= 0) {
				prev = 0;
				next = prev;
			}
			oImg.src = 'images/'+prev+".jpg";
			oTitle.innerHTML = prev + 1 + "/5";
			oText.innerHTML = obj[prev];
		};
	};
	oAgain.onclick = function(){
		oNormal.removeAttribute("class");
		oNormal.setAttribute("class","again");
		oAgain.setAttribute("class","normal");
			oNext.onclick = function () {
			next++;
			if (next > obj.length-1) {
				next = 0;
			};
			oImg.src = 'images/'+next+".jpg";
			oTitle.innerHTML = next + 1 + "/5";
			oText.innerHTML = obj[next];
			if (next>=0) {
				prev = next;
			};			
		};
		oPrev.onclick = function () {
			prev--;
			if (prev < 0) {
				prev = obj.length-1;
			};
			oImg.src = 'images/'+prev+".jpg";
			oTitle.innerHTML = prev + 1 + "/5";
			oText.innerHTML = obj[prev];
			
			if (prev >= 0) {
				next = prev;
			};
		};
	};
	