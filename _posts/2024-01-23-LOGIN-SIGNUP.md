---
title: Login/Signup Page
layout: post
description: A login screen that interacts with Python and obtains a JWT  
type: hacks
courses: { csp: {week: 20 }}
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Signup Form</title>
</head>
<body>

<!-- Login Form -->
<form id="loginForm" onsubmit="loginUser()">
    <p><label>
        User ID:
        <input type="text" name="uid" id="loginUid" required>
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="loginPassword" required>
    </label></p>
    <p>
        <button type="submit">Login</button>
    </p>
</form>

<!-- Signup Form -->
<form id="signupForm" onsubmit="signupUser()">
    <p><label>
        Name:
        <input type="text" name="name" id="signupName" required>
    </label></p>
    <p><label>
        User ID:
        <input type="text" name="uid" id="signupUid" required>
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="signupPassword" required>
    </label></p>
    <p>
        <button type="submit">Signup</button>
    </p>
</form>

<script>
// Fake Database
var fakeDatabase = [
    { name: "Alisha", userId: "alisha", password: "awesome" },
    { name: "Mort", userId: "mort", password: "hello" }
];

function loginUser() {
    var userId = document.getElementById("loginUid").value;
    var password = document.getElementById("loginPassword").value;

    // Check login credentials
    if (isUserValid(userId, password)) {
        // Successful login, redirect to database page
        window.location.href = "database_page.html";
    } else {
        // Incorrect login, show error page
        window.location.href = "error.html";
    }
}

function signupUser() {
    var name = document.getElementById("signupName").value;
    var userId = document.getElementById("signupUid").value;
    var password = document.getElementById("signupPassword").value;

    // Check if user already exists
    if (isUserExists(userId)) {
        // User already exists, show conflict error page
        window.location.href = "error_conflict.html";
    } else {
        // Add user to fake database
        fakeDatabase.push({ name: name, userId: userId, password: password });

        // Successful signup
        window.location.href = "success_signup.html";
    }
}

function isUserValid(userId, password) {
    // Check if user exists in the fake database and has the correct password
    return fakeDatabase.some(user => user.userId === userId && user.password === password);
}

function isUserExists(userId) {
    // Check if user already exists in the fake database
    return fakeDatabase.some(user => user.userId === userId);
}
</script>

</body>
</html>
