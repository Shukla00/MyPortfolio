// =====================================
// TYPING EFFECT
// =====================================
const typedTextSpan = document.querySelector(".typing-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Vinayak Shukla", "A Full Stack Developer", "An Aspiring AI Engineer"];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // when to reveal

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// =====================================
// NAVBAR BACKGROUND ON SCROLL
// =====================================
function updateNavbar() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// =====================================
// MOBILE MENU TOGGLE
// =====================================
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
});

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});

// =====================================
// UPDATE COPYRIGHT YEAR
// =====================================
document.getElementById('year').textContent = new Date().getFullYear();

// =====================================
// INITIALIZE
// =====================================
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", updateNavbar);

document.addEventListener("DOMContentLoaded", function () {
    // Start typing effect slightly after load
    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // Check initial scroll position
    reveal();
    updateNavbar();
});
