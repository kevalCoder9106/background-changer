var c01 = document.getElementById("c01");
var c02 = document.getElementById("c02");

var info = document.querySelector("h3");
var body = document.getElementById("gradient");

function changeValue(){
    body.style.background = "linear-gradient(to right, " + c01.value + ", " + c02.value + ")";
    info.textContent = "left: " + c01.value + ", right: " + c02.value;
}