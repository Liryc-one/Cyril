const typewriterElement = document.getElementById('typewriter');
const cursorElement = document.querySelector('.cursor');

const dynamicTexts = [
  "Web developer",
  "Blockchain enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let typingSpeed = 60;
let erasingSpeed = 30;
let delayBetweenTexts = 1800;

const staticPrefix = "Hi, I'm Cyril a ";

function type() {
  if (charIndex < dynamicTexts[textIndex].length) {
    typewriterElement.textContent = staticPrefix + dynamicTexts[textIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = staticPrefix + dynamicTexts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % dynamicTexts.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});
