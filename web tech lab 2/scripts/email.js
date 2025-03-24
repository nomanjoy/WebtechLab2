document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");

    if (email === "") {
        emailError.textContent = "Email cannot be empty.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Must be a valid email address (e.g., sample@example.com).";
        return;
    }

    emailError.textContent = "submitted successfully!";
});
