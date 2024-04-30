---
comments: True
layout: base
title: Reviews 
description: Allows users to review over books they have read 
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /Review
---
<html lang="en">
<head>
    <style>
        body, input, textarea, button, h2, h3, label {
            font-family: 'Times New Roman', Times, serif; 
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
            margin: 0; 
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <h2>Book Title:</h2>
        <input type="text" id="bookTitle" placeholder="Enter book title"> 
    </div>
    <form id="reviewForm">
        <h3>Write a Review</h3>
        <textarea id="reviewText" placeholder="Write your review here"></textarea>
        <h3>Rating</h3>
        <!-- this is an input for the user to select which rating they would give a book -->
        <input type="radio" name="rating" value="1" id="rating1"><label for="rating1">1</label>
        <input type="radio" name="rating" value="2" id="rating2"><label for="rating2">2</label>
        <input type="radio" name="rating" value="3" id="rating3"><label for="rating3">3</label>
        <input type="radio" name="rating" value="4" id="rating4"><label for="rating4">4</label>
        <input type="radio" name="rating" value="5" id="rating5"><label for="rating5">5</label>
        <!-- the submit button calls to the submitReview function. -->
        <input type="submit" id="submitReview" value="Submit Review">
    </form>
    <!-- js to handle the form submission -->
    <script type="module">
        import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
        // makes sure page is loaded before code starts 
        document.addEventListener('DOMContentLoaded', function() {
           // this procedure is named submitReview, and is a void procedure which means it does not have a return type. The parameters for this code are the title, review and ratings. 
           document.getElementById('reviewForm').addEventListener('submit', 
            function(submitReview) {
                submitReview.preventDefault(); 
                const title = document.getElementById("bookTitle").value;
                const review = document.getElementById("reviewText").value;
                const ratings = document.querySelectorAll('input[name="rating"]');
                let ratingValue;
                // the "for" loop iterates until it finds the value that the user selected.
                for (const rating of ratings) {
                    // if statement represents selection
                    if (rating.checked) {
                        ratingValue = rating.value;
                        break;
                    }
                }
                const body = {
                // sequence is shown by the steps that occur, creating a body, fetching the data, handling the proper respons
                 shown by the steps that occur, creating a body, fetching the data, handling the proper respons
                    title: title,
                    review: review,
                    rating: parseInt(ratingValue),
                };
                const url =  uri + '/api/book_reviews/';
                console.log(JSON.stringify(body));
                console.log(options);
                  fetch("http://127.0.0.1:8086/api/book_reviews/", {
        ...options, 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        window.location.href = "/CPTproject/reviews/database";
    })
    .catch(err => {
        console.error(err.message);
    });
    })});
</script>
</body>
</html>
