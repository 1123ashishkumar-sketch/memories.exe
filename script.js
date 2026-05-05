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

// SCREEN SWITCH (smooth)
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
    const log = document.getElementById("log");

    const messages = [
        "Trying to fix things…",
        "I really should’ve been there…",
        "You matter more than my excuses."
    ];

    log.innerText = messages[steps - 1] || "Almost done…";

    if (steps >= 3) {
        setTimeout(() => showScreen("gallery"), 800);
    }
}

// FINAL
function finalScreen() {
    showScreen("final");

    const msg = `Garima! I know this doesn’t replace actually being there today.
            But you matter to me a lot bby ...i will make sure we enjoy our time together more than what we are missing today <br><br>
            I’ll make it up to you properly. I promise.`;

    typeWriter(document.getElementById("finalText"), msg);
}