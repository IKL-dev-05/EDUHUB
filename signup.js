const container = document.getElementById("container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

// Toggle to registration form
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

// Toggle to login form
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Show alert after registration form is submitted
const registerForm = document.querySelector(".form-box.register form");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    alert("🎉 Registration successful! Welcome to EDUHUB.");
});
