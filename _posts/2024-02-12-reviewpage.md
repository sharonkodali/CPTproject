---
comments: True
layout: base
title: Reviews 
description: Allows users to review over books they have read 
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /Review
---
---
<html lang="en">
<head>
    <style>
        body, input, textarea, button, h2, h3, label { /* Add more selectors as needed */
            font-family: 'Times New Roman', Times, serif; /* This ensures consistency */
        }
        body {
            margin: 50px;
        }
        textarea, input[type="text"] {
            width: 100%;
            margin-bottom: 10px;
        }
        input[type="radio"] {
            margin-bottom: 10px;
        }
        input[type="submit"] {
            padding: 10px;
            background-color: #ffaa00;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .flex-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .flex-container h2, .flex-container input[type="text"] {
            margin: 0; /* Adjust spacing as needed */
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <h2>Book Title:</h2>
        <input type="text" id="bookTitle" placeholder="Enter book title"> 
    </div>
    <!-- Review Form -->
    <form id="reviewForm">
        <h3>Write a Review</h3>
        <textarea id="reviewText" placeholder="Write your review here"></textarea>
        <h3>Rating</h3>
        <input type="radio" name="rating" value="1" id="rating1"><label for="rating1">1</label>
        <input type="radio" name="rating" value="2" id="rating2"><label for="rating2">2</label>
        <input type="radio" name="rating" value="3" id="rating3"><label for="rating3">3</label>
        <input type="radio" name="rating" value="4" id="rating4"><label for="rating4">4</label>
        <input type="radio" name="rating" value="5" id="rating5"><label for="rating5">5</label>
        <!-- Submit Button -->
        <input type="submit" id="submitReview" value="Submit Review">
    </form>
    <!-- JavaScript to handle the form submission -->
    <script type="module">
        // uri variable and options object are obtained from config.js
        import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('reviewForm').addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent the default form submission
                const title = document.getElementById("bookTitle").value;
                const review = document.getElementById("reviewText").value;
                const ratings = document.querySelectorAll('input[name="rating"]');
                let ratingValue;
                for (const rating of ratings) {
                    if (rating.checked) {
                        ratingValue = rating.value;
                        break;
                    }
                }
                const body = {
                    title: title,
                    review: review,
                    rating: parseInt(ratingValue),
                };
                const url =  uri + '/api/book_reviews/';
                console.log(JSON.stringify(body));
                console.log(options);
                  fetch("http://127.0.0.1:8086/api/book_reviews/", {
        ...options, // Ensure this is within the fetch config object
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(body) // Uncomment if needed, typically for POST requests
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // or response.text() if your server responds with plain text
    })
    .then(data => {
        // Handle the response data
        console.log(data);
        window.location.href = "/CPTproject/reviews/database";
    })
    .catch(err => {
        console.error('There was a problem with the fetch operation: ' + err.message);
    });
    })});
</script>
</body>
</html>
