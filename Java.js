function cambiacolor(){
var r, g, b, color;
r = document.getElementById('slideR').value;
g = document.getElementById('slideG').value;
b = document.getElementById('slideB').value;
color = 'rgb('+r+','+g+','+b+')';
document.getElementById("titulo").style.color= color;
	
} 