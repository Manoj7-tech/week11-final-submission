// 1. Select the elements
const modeBtn = document.querySelector('#dark-btn');
const bodyElement = document.body;

// 2. The Logic
modeBtn.addEventListener('click', () => {
    // Flip the dark-mode switch
    bodyElement.classList.toggle('dark-mode');

    // 3. Print success message for the screenshot
    if (bodyElement.classList.contains('dark-mode')) {
        console.log("Manoj's Portfolio: Dark Mode ON 🌙");
    } else {
        console.log("Manoj's Portfolio: Light Mode ON ☀️");
    }
});
