

// Global scope variable
let globalMessage = "Result calculated: ";

// Function with parameters and return value
function calculateArea(width, height) {
  let area = width * height; // Local scope variable
  let message = globalMessage + area;
  document.getElementById("result").textContent = message;
  return area;
}



// Reusable function to trigger animation
function triggerAnimation(elementId, animationClass) {
  let element = document.getElementById(elementId);
  element.classList.add(animationClass);

  // Remove animation class after it finishes (to allow re-triggering)
  element.addEventListener("animationend", () => {
    element.classList.remove(animationClass);
  }, { once: true });
}

// Button event listener
document.getElementById("animateBtn").addEventListener("click", () => {
  triggerAnimation("animateBtnBox", "animate");
});

// Fix: use querySelector for animated box
document.querySelector(".animated-box").setAttribute("id", "animateBtnBox");
