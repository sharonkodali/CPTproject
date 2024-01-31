---
title: JWT signup test (python/flask)
layout: base
description: A signup screen that interacts with Python and obtains a JWT  
type: ccc
courses: { csp: {week: 18 }}
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
</head>
<body>
    <h1>Signup</h1>
    <h3>Please create a new user by filling in the credentials below.</h3>
    <!-- Form for user signup -->
    <form id="signupForm">
        <label for="newUsername">Username:</label>
        <input type="text" id="newUsername" name="newUsername" required><br>
        <label for="newPassword">Password:</label>
        <input type="password" id="newPassword" name="newPassword" required><br>
        <label for="newBirthYear">Birth Year:</label>
        <input type="number" id="newBirthYear" name="newBirthYear" required><br>
        <!-- Button to trigger signupUser function -->
        <button type="button" onclick="signupUser()">Signup</button>
        <!-- Paragraph to display signup messages -->
        <p id="signupMessage"></p>
    </form>
    <script>
        // Function to handle the response from the signup API
        function handleSignupResponse(response) {
            document.getElementById('signupMessage').innerText = response.message;
            // Redirect to another page after successful signup
            if (response.redirect) {
                setTimeout(() => {
                    window.location.href = response.redirect;
                }, 2000);
            }
        }
        // Function to send a signup request to the API
        function signupUser() {
            // Get values from the input fields
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const newBirthYear = document.getElementById('newBirthYear').value;
            // Fetch to the signup API endpoint
            fetch('http://localhost:5000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Convert user credentials to JSON and send in the request body
                body: JSON.stringify({ uid: newUsername, password: newPassword, birthYear: newBirthYear }),
            })
            // Parse the JSON response
            .then(response => response.json())
            // Handle the signup response
            .then(data => handleSignupResponse(data))
            .catch(error => {
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>