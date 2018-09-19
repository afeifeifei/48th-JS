let oUl = document.getElementsByTagName("ul")[0],
	obj = "";
	
for (let x=1;x<=9;x++) {
	let str = "";
	for (let y=1;y<=x;y++){
		str += "<span>"+ x +"*"+ y + "=" + x*y +"</span>";
	};
	obj += "<li>"+str+"</li>"
};
oUl.innerHTML += obj;
 
 //  document.write('<table border="1" bgcolor="#ccc" width="80%" cellpadding="0" cellspacing="0">');
 // for(var i=1;i<=9;i++){
 // document.write('<tr>');
 //  for(var j=1;j<=i;j++){
 //  document.write('<td>'+i+'x'+j+'='+(i*j)+'</td>');
 //  }
 // document.write('</tr>');
 // }
 // document.write('</table>');