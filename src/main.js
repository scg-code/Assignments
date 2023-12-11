// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                });
        });
});

// Typing Animation
const typedTextSpan = document.getElementById('typed-text');
const textArray = ["Hi, I'm Samuel Gifford"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        // move to next text after newTextDelay
        if (textArrayIndex < textArray.length - 1) {
            textArrayIndex++;
            charIndex = 0;
            setTimeout(type, newTextDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});