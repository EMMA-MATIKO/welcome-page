document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Let's explore the web, privately and securely 😉";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } else {
            textElement.classList.remove("typing-effect");
        }
    }

    const firstParagraph = document.querySelector('.fade-in');
    firstParagraph.addEventListener('animationend', function () {
        textElement.classList.add("typing-effect");
        type();
    });
});