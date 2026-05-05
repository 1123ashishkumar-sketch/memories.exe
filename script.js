let steps = 0;

// TYPEWRITER
function typeWriter(element, text, speed = 35) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// SWITCH SCREEN
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// START TEXT
window.onload = () => {
    typeWriter(
        document.getElementById("introText"),
        "Running Memories.exe...\nLoading someone very important ❤️"
    );
};

// START
function startApp() {
    showScreen("game");
}

// GAME
function fix() {
    steps++;

    const messages = [
        "Trying to fix things…",
        "I really should’ve been there…",
        "You matter more than my excuses."
    ];

    document.getElementById("log").innerText = messages[steps - 1];

    if (steps >= 3) {
        setTimeout(() => showScreen("gallery"), 800);
    }
}

// FINAL
function finalScreen() {
    showScreen("final");

    const msg = `I know I messed up today.

Not being there… that’s on me.

But you matter to me more than I showed.

I’m really sorry ❤️`;

    typeWriter(document.getElementById("finalText"), msg);
}
