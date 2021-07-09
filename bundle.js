(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
