var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var mountains3 = document.getElementById("mountains3");
var mountains4 = document.getElementById("mountains4");
var river = document.getElementById("river");
var boat6 = document.getElementById("boat");
var nouvil = document.querySelector(".nouvil");


// لما اعمل سكرول اي احرك لتحت وفوق
window.onscroll = function() {
var value = scrollY;

// stars
stars.style.left = value + "px" ;
moon.style.right = value * 4 + "px";
mountains3.style.top = value * 2 + "px";
mountains4.style.top = value * 1.5 + "px";
river.style.top = value + "px";
boat6.style.top = value + "px";
boat6.style.left = value * 3 + "px";
nouvil.style.fontSize = value + "px";
// 67اخدناها من سكرول لنوقف نوفل عند حد معين
if(scrollY >= 67){
nouvil.style.fontSize = 60 + "px";



}



if(scrollY >= 50){
    document.querySelector(".script").style.background = "blue";
}
else {
    document.querySelector(".script").style.background = "#200016";
}



}



















