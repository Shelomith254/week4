// Part 2: Functions, Parameters, Scope, Return Values

// Global scope variable
let globalCount = 0;

// Function with parameter & return value
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating scope
function scopeExample() {
  let localCount = 5; // local scope
  globalCount++;
  return `Local count: ${localCount}, Global count: ${globalCount}`;
}

// Display scope demo result on page load
document.getElementById("scopeResult").textContent = scopeExample();


// Part 3: Combining JS + CSS Animations
const box = document.getElementById("animateBox");
const triggerBtn = document.getElementById("triggerAnimationBtn");

triggerBtn.addEventListener("click", () => {
  // Reusable function to trigger animation
  function triggerAnimation(element, className) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
    }, 1000); // match animation duration
  }

  triggerAnimation(box, "animate");
});
