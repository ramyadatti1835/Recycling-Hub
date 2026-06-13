document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        document.getElementById("message").textContent = "All fields are required!";
        return;
    }

    localStorage.setItem("loggedInUser", email);
    window.location.href = "dashboard.html";
    function logout() {
    // Redirect to login page
    window.location.href = "login.html";
}
});
