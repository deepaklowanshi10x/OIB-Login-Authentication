function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate server-side authentication (replace with server-side code)
    var validUsers = { "user1": "password1", "user2": "password2" };

    if (username in validUsers && validUsers[username] === password) {
        document.getElementById("message").innerHTML = "Login successful!";
    } else {
        document.getElementById("message").innerHTML = "Invalid login credentials. Please try again.";
    }
}
