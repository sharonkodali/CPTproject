---
comments: True
layout: base
title: Book Reccomendation 
description: Gives users sugessted books to read
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /bookreccom
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find a book, perfect for you!</title>
    <style>
        body, input, button, div, h3, p, a, h1 {
            font-family: 'Times New Roman', Times, serif;
        }
        body {
            margin: 50px;
        }
        .container {
            display: flex;
            align-items: center;
        }
        .book-search {
            margin-left: 20px;
        }
        .book-card {
            border: 1px solid #ddd;
            margin-bottom: 20px;
            padding: 10px;
        }
        .book-card img {
            max-width: 100px;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Book Recommendation System</h1> 
    <!-- Input box for favorite book -->
    <div>
        <input type="text" id="favoriteBookInput" placeholder="Enter your favorite book">
        <button onclick="getRecommendation()">Get Recommendation</button>
    </div>
    <!-- Display recommended books here -->
    <div id="recommendationResults">
        <!-- Recommended books will be displayed here -->
    </div>

<script>
    async function getRecommendation() {
        const favoriteBookInput = document.getElementById("favoriteBookInput").value.trim();
        if (favoriteBookInput === "") {
            alert("Please enter your favorite book.");
            return;
        }
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(favoriteBookInput)}`;
        const recommendationResults = document.getElementById("recommendationResults");
        recommendationResults.innerHTML = ''; // Clear previous results
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('API Response:', data);
            if (data && data.items && data.items.length > 0) {
                const favoriteBook = data.items[0].volumeInfo; // Assume the first book in the list is the favorite
                const recommendations = await fetchRecommendations(favoriteBook);
                if (recommendations && recommendations.length > 0) {
                    displayRecommendations(recommendations);
                } else {
                    recommendationResults.innerHTML = 'No recommendations found.';
                }
            } else {
                recommendationResults.innerHTML = 'No book found.';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            recommendationResults.innerHTML = 'An error occurred while fetching data.';
        }
    }

    async function fetchRecommendations(book) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=related:${book.title}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Recommendation Response:', data);
            return data && data.items ? data.items.map(item => item.volumeInfo) : [];
        } catch (error) {
            console.error('Error fetching recommendations:', error);
            return [];
        }
    }

    function displayRecommendations(recommendations) {
        const recommendationResults = document.getElementById("recommendationResults");
        recommendations.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book-card");
            bookElement.innerHTML = `
                <h3>${escapeHTML(book.title)}</h3>
                <img src="${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'No image available'}" alt="${escapeHTML(book.title)}">
                <p>Author: ${book.authors ? book.authors.join(', ') : 'Unknown'}</p>
                <p>Rating: ${book.averageRating ? book.averageRating : 'Not available'}</p>
                <p>Plot: ${book.description ? book.description : 'Not available'}</p>
                <a href="${book.infoLink}" target="_blank">More info</a>
            `;
            recommendationResults.appendChild(bookElement);
        });
    }

    function escapeHTML(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
</script>
</body>
</html>
