---
comments: True
title: Book Genre Reccomendation 
description: Ever wanted to try a new book genre to read. This page helps with that. Just put in whichever genre you want to read about. 
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /bookgenre
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> </title>
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
    <h1></h1> 
    <!-- Input box for favorite genre -->
    <div>
        <input type="text" id="favoriteGenreInput" placeholder="Enter book genre that you want to read. ">
        <button onclick="getRandomBook()">Surprise Me</button>
    </div>
    <!-- Display random book here -->
    <div id="bookResult">
        <!-- Random book will be displayed here -->
    </div>

<script>
    async function getRandomBook() {
        const favoriteGenreInput = document.getElementById("favoriteGenreInput").value.trim();
        if (favoriteGenreInput === "") {
            alert("Please enter your favorite genre.");
            return;
        }
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(favoriteGenreInput)}&maxResults=40`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('API Response:', data);
            if (data && data.items && data.items.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.items.length);
                const randomBook = data.items[randomIndex].volumeInfo;
                displayBook(randomBook);
            } else {
                document.getElementById("bookResult").innerHTML = 'No books found for the specified genre.';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById("bookResult").innerHTML = 'An error occurred while fetching data.';
        }
    }

    function displayBook(book) {
        const bookResult = document.getElementById("bookResult");
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
        bookResult.innerHTML = ''; // Clear previous result
        bookResult.appendChild(bookElement);
    }

    function escapeHTML(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
</script>
</body>
</html>
