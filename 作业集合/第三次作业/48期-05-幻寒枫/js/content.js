let oInput = document.getElementsByTagName("input")[0],
	oButton = document.getElementsByClassName("fr")[0],
	oUl = document.getElementsByTagName("ul")[0];
oInput.onclick = function () {
	oInput.value = "";
	oInput.style.cssText = "font-size: 18px;color:black";
	}
oButton.onclick = function () {
	oUl.innerHTML += "<li>" + oInput.value + "</li>";
	oInput.value = "";
}