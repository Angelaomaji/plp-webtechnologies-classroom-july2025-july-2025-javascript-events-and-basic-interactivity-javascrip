// ---------------------------
// Part 1: Event Handling
// ---------------------------
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", function() {
  message.textContent = "Hello, welcome to Demin store interactive JavaScript!";
});

// ---------------------------
// Part 2: Interactive Features
// ---------------------------

// Light/Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

// ---------------------------
// Part 3: Form Validation 
// ---------------------------
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  // Grab inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Show success message if all is valid
  if (isValid) {
    document.getElementById("formMessage").textContent = "Form submitted successfully!";
    form.reset(); // clear fields
  }
});
