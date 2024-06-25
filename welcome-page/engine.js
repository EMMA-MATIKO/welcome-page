document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Let's explore the web fast, privately and securely 😉";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 40);
        } else {
            textElement.classList.remove("typing-effect");
        }
    }

    const firstParagraph = document.querySelector('.fade-in');
    firstParagraph.addEventListener('animationend', function () {
        textElement.classList.add("typing-effect");
        type();
    });

    function updateTimeAndGreeting() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds()

        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        document.getElementById('time').textContent = `Current time: ${formattedTime}`;

        let greeting = '';
        if (hours < 12) {
            greeting = 'Good morning boss!';
        } else if (hours < 18) {
            greeting = 'Good afternoon boss!';
        } else {
            greeting = 'Good evening boss!';
        }
        document.getElementById('greeting').textContent = greeting;

        setTimeout(updateTimeAndGreeting, 1000);
    }

    updateTimeAndGreeting();
});
