---
comments: True
layout: base
title: After Login 
description: This is the page that has all the fatures that are avaliable to the user
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /sechome
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <style>
        body, button, a {
            font-family: 'Times New Roman', Times, serif;
        .button-container button {
            padding: 10px; 
            margin: 5px; 
            background-color: #8b4513; 
            color: white;
            border: none; 
            cursor: pointer; 
        }
        .button-container button a {
            color: white; 
            text-decoration: none; 
            display: block; 
        }
    </style>
</head>
<body>
<div class="collage-background">
  <!-- Content over the collage background goes here -->
</div>
<div class="button-container">
    <button id="my-reviews"><a href='{{site.baseurl}}/Review'>Create a Review</a></button>
    <button id="my-favorites"><a href='{{site.baseurl}}/booksearch'>Book Catalog</a></button>
    <button id="reading-list"><a href='{{site.baseurl}}/bookreccom'>Recommendations</a></button>
    <button id="reading-list"><a href='{{site.baseurl}}/Favreads'>Adds Favorites</a></button>
    <button id="reading-list"><a href='{{site.baseurl}}/bookgenre'>Genre Reccomendations</a></button>
</div>
</body>
</html>
    