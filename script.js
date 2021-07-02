var css = document.querySelector("h3");
var color1 = document.getElementById('color1');
var color2 = document.getElementById("color2");
var body = document.getElementById("bodd");

function chane(){
	var y=color2.value;
	var x=color1.value;
	body.style.background ="linear-gradient(to right, "+ x +", "+y+")";
	css.textContent = body.style.background+";"
}
color1.addEventListener("input",chane);
color2.addEventListener("input",chane);
chane();