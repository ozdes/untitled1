/*!
 * Ripple.js - A simple and lightweight ripple effect for buttons and elements
 * https://github.com/material-tailwind/html
 * Version 1.0.0
 */

document.addEventListener("DOMContentLoaded", function() {
    const rippleElements = document.querySelectorAll("[data-ripple]");

    rippleElements.forEach((element) => {
        element.addEventListener("click", (event) => {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            element.appendChild(ripple);

            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        });
    });
});
