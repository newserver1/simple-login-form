document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        alert(`Email: ${email}\nPassword: ${password}`);
        // In a real scenario, you would send the data to the server for processing.
        // Make sure to use HTTPS and implement proper server-side validation and security measures.
    });
});
