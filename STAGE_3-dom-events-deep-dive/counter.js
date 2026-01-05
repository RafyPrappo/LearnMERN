// STATE: our counter value
let count = 0;

// Grab DOM elements
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Update DOM whenever state changes
function render() {
  counterValue.textContent = count;
}

// Event listeners
incrementBtn.addEventListener("click", function() {
  count++; // increase state
  render(); // update DOM
});

decrementBtn.addEventListener("click", function() {
  count--; // decrease state
  render();
});

resetBtn.addEventListener("click", function() {
  count = 0; // reset state
  render();
});

// Initial render
render(); //Ask gpt about why we have this render function call for Initial render at the end of the program. Why not at the begining?
          //If it's initial, it should be at the begining right? then why not?
          //It will clear up a fundamental concept of how functions and a program file works
