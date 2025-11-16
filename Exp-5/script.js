document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Retrieve form values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("message");

    // Clear previous errors
    document.querySelectorAll(".error").forEach(err => err.textContent = "");

    // Name validation
    if (name.value.trim() === "") {
        setError(name, "Name cannot be empty");
        isValid = false;
    }

    // Email validation
    if (!validateEmail(email.value)) {
        setError(email, "Enter a valid email address");
        isValid = false;
    }

    // Password validation
    if (password.value.trim() === "") {
        setError(password, "Password cannot be empty");
        isValid = false;
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        setError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        setError(message, "Message cannot be empty");
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Form submitted successfully!");
        // You could also submit the form or reset it here
        // this.submit();
        // this.reset();
    }
});

// Function to display error
function setError(input, message) {
    const formControl = input.parentElement;
    const errorText = formControl.querySelector(".error");
    errorText.textContent = message;
}

// Email format checker
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
