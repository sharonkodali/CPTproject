---
comments: True
layout: base
title: Book Search 
description: User can search for books using Google API 
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /booksearch
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Search</title>
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
    <h1>Search through and find a book perfect for you!</h1> 
    <!-- Input box for book search -->
    <div>
        <input type="text" id="bookInput" placeholder="Enter a book title">
        <button onclick="searchBook()">Search</button>
    </div>
    <!-- Display book search results here -->
    <div id="bookResults">
        <!-- book search results will be displayed here -->
    </div>
    <script>
        async function searchBook() {
            const bookInput = document.getElementById("bookInput").value.trim();
            if (bookInput === "") {
                alert("Please enter a book title.");
                return;
            }
            const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent('intitle:' + bookInput)}`;
            const bookResults = document.getElementById("bookResults");
            bookResults.innerHTML = ''; // Clear previous results
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('API Response:', data); // Log API response
                if (data.items && data.items.length > 0) {
                    // Process and display book data
                    const exactMatches = data.items.filter(item => item.volumeInfo.title.toLowerCase() === bookInput.toLowerCase());
                    if (exactMatches.length > 0) {
                        exactMatches.forEach(book => {
                            const volumeInfo = book.volumeInfo;
                            const bookElement = document.createElement("div");
                            bookElement.classList.add("book-card");
                            bookElement.innerHTML = `
                                <h3>${volumeInfo.title}</h3>
                                <img src="${volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail ? volumeInfo.imageLinks.thumbnail : ''}" alt="${volumeInfo.title}">
                                <p>Author: ${volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
                                <p>Rating: ${volumeInfo.averageRating ? volumeInfo.averageRating : 'Not available'}</p>
                                <p>Description: ${volumeInfo.description ? volumeInfo.description : 'Not available'}</p>
                                <a href="${volumeInfo.infoLink}" target="_blank">More info</a>
                            `;
                            bookResults.appendChild(bookElement);
                        });
                    } else {
                        bookResults.innerHTML = 'No exact match found. Showing similar results.';
                        // Display similar results
                        data.items.forEach(book => {
                            const volumeInfo = book.volumeInfo;
                            const bookElement = document.createElement("div");
                            bookElement.classList.add("book-card");
                            bookElement.innerHTML = `
                                <h3>${volumeInfo.title}</h3>
                                <img src="${volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail ? volumeInfo.imageLinks.thumbnail : ''}" alt="${volumeInfo.title}">
                                <p>Author: ${volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
                                <p>Rating: ${volumeInfo.averageRating ? volumeInfo.averageRating : 'Not available'}</p>
                                <p>Description: ${volumeInfo.description ? volumeInfo.description : 'Not available'}</p>
                                <a href="${volumeInfo.infoLink}" target="_blank">More info</a>
                            `;
                            bookResults.appendChild(bookElement);
                        });
                    }
                } else {
                    // Handle no results
                    bookResults.innerHTML = 'No book found.';
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                bookResults.innerHTML = 'An error occurred while fetching data.';
            }
        }                    
    </script>
</body>
</html>
