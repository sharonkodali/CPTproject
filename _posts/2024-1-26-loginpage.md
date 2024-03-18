---
title: JWT Login test (python/flask)
layout: base
description: A login screen that interacts with Python and obtains a JWT  
type: ccc
courses: { csp: {week: 18 }}
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Apply Times New Roman to all elements, correcting the font family and ensuring consistency */
        * {
            font-family: 'Times New Roman', Times, serif !important; /* Ensure Times New Roman is used */
            margin: 0; /* Reset default margin for all elements */
            padding: 0; /* Reset default padding for all elements */
        }
        body {
            margin: 50px; /* Add custom margin to the body for better layout */
        }
        /* Additional styles to enhance form and text appearance */
        div#titleContainer h1, div.container form p, div.container form a {
            margin: 20px 0; /* Add some spacing around elements for better readability */
        }
        input.userInput, button {
            display: block; /* Make input fields and button block-level for full width */
            margin: 10px 0; /* Add some margin for spacing */
            padding: 8px; /* Add padding for better text visibility and field interaction */
        }
        button {
            cursor: pointer; /* Change cursor to pointer when hovering over the button */
            background-color: #007bff; /* Add a background color to the button */
            color: white; /* Change the button text color to white */
            border: none; /* Remove default border from the button */
            border-radius: 4px; /* Add rounded corners to the button */
        }
        a {
            color: #007bff; /* Style the link color to match the button for consistency */
            text-decoration: none; /* Remove underline from links */
        }
        a:hover {
            text-decoration: underline; /* Add underline on hover for links for better user interaction */
        }
         {
            font-family: 'Times New Roman', Times, serif !important;
            margin: 0;
            padding: 0;
        }
        body {
            margin: 50px;
        }
        div#titleContainer h1, div.container form p, div.container form a {
            margin: 20px 0;
        }
        input.userInput, button {
            display: block;
            margin: 10px 0;
            padding: 8px;
        }
        button {
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        /* Specific style for the Register link to appear white */
        a[href*='Signup'] {
            color: white; /* Make the Register link white */
        }
    </style>
<!-- 
A simple HTML login form with a Login action when the button is pressed.  

The form triggers the login_user function defined in the JavaScript below when the Login button is pressed.
-->
<form action="javascript:login_user()">
    <p><label>
        User ID:
        <input type="text" name="uid" id="uid" required>
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password" required>
    </label></p>
    <p>
        <button>Login</button>
    </p>
</form>

<!-- 
Below JavaScript code is designed to handle user authentication in a web application. It's written to work with a backend server that uses JWT (JSON Web Tokens) for authentication.

The script defines a function when the page loads. This function is triggered when the Login button in the HTML form above is pressed. 
 -->
<script type="module">
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/authenticate';

        // Set the body of the request to include login data from the DOM
        const body = {
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to the database page
            window.location.href = "{{site.baseurl}}/sechome";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    
    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;
</script>