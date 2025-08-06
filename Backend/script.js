document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Dummy check
  if (email === "admin@example.com" && password === "123456") {
    message.textContent = "Login successful!";
    message.style.color = "lightgreen";
  } else {
    message.textContent = "Invalid credentials. Try again.";
    message.style.color = "red";
  }
});
