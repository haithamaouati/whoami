console.log("Author: Haitham Aouati");
console.log("GitHub: https://github.com/haithamaouati");

// Dark Mode Toggle
function toggleDarkMode() {
   document.body.classList.toggle("dark-mode");
}

// Terminal-Style Text Animation
const introText = "I’m Haitham Aouati (also known as HawkHA), a 24 yo tech enthusiast who likes computers. I’m not a genius or an expert in anything, but I’m always looking to gain and share my knowledge.";
let i = 0;

function typeWriter() {
   if (i < introText.length) {
      document.getElementById("intro-text").innerHTML += introText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
   }
}

window.onload = typeWriter;

// Current time
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

showTime();
setInterval(function () {
	showTime();
}, 1000);
