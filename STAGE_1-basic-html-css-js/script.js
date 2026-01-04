// This file controls the behavior of your webpage.
// It is linked in index.html using <script src="script.js"></script>

// Grab elements by their IDs
const header1 = document.getElementById("header1"); //we can also use 'let' instead of 'const' while declaring var for now
const button1 = document.getElementById("button1"); // document.getElementById('Given_Id_In_HTML_File') grabs the content from HTML
const paragraph1 = document.getElementById("paragraph1");
const button2 = document.getElementById("button2");
const resetBtn = document.getElementById("resetBtn");

// Toggle header text when button1 is clicked
const newText = "Hello, World!";
button1.addEventListener("click", () => { // We are basically saying that if button1 is interacted, and the interaction is a mouse "click"
                                            // then call a function '()' that satisfies the below conditions inside the curly braces
    if (header1.textContent === "Welcome to My Homepage") {
        header1.textContent = newText;
    } else {
        header1.textContent = "Welcome to My Homepage";
    }
});

// Cycle paragraph colors when button2 is clicked
const colors = ["red", "green", "blue", "yellow", "purple"];
let idx = 0;

button2.addEventListener("click", () => {
    paragraph1.style.color = colors[idx]; //grabbing the color of paragraph1 from CSS
    idx = (idx + 1) % colors.length; // Loops back to 0 after last color as anything modded by a higher or same number returns 0
});

// Reset everything when resetBtn is clicked
resetBtn.addEventListener("click", () => {
    header1.textContent = "Welcome to My Homepage"; // Reset header
    paragraph1.textContent = "This is a paragraph on my homepage"; // Reset paragraph
    paragraph1.style.color = "white"; // Reset color
    document.body.style.backgroundColor = "grey"; // Reset background
    idx = 0; // Reset color cycle index
});
