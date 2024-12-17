console.log("Author: Haitham Aouati");
console.log("GitHub: https://github.com/haithamaouati");

// Dark Mode Toggle
function toggleDarkMode() {
   document.body.classList.toggle("dark-mode");
}

// Terminal-Style Text Animation
const introText = "I’m Haitham Aouati (also known as HawkHA), a 24 yo tech enthusiast who likes computers. I’m not a genius or an expert in anything, but I’m always looking to gain and share my knowledge.";
const mfaText = "Algeria condemned on Monday “in the strongest terms” the barbaric massacre committed by the Zionist entity on Saturday against defenseless civilians in the Nuseirat camp in the Gaza Strip.";

let introIndex = 0;
let mfaIndex = 0;

// Function for typing out text
function typeWriter() {
    // Typing for introText
    if (introIndex < introText.length) {
        document.getElementById("intro-text").innerHTML += introText.charAt(introIndex);
        introIndex++;
    }

    // Typing for mfaText
    if (mfaIndex < mfaText.length) {
        document.getElementById("mfa-text").innerHTML += mfaText.charAt(mfaIndex);
        mfaIndex++;
    }

    // Continue the typing process for both texts
    setTimeout(typeWriter, 50);
}

window.onload = typeWriter;
