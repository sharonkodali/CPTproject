---
layout: base
title: Database Get
hide: true
description: Displays the previous reviews and adds the new one
permalink: /reviews/database
---
<!-- HTML table layout for page.  The table is filled by JavaScript below.-->
<table>
  <body>
    <h1 style="font-family: 'Times New Roman', Times, serif;">Book Review Log</h1>
    <table>
  <tr>
    <th>Title</th>
    <th>Review</th>
    <th>Rating</th>
  </tr>
  <tbody id="result">
  </tbody>
</table>
 <!-- below js code fetches user data from the review.py API and displays it in a table. It makes a GET request to the '/api/book_reviews/' endpoint. The script is in a sequence and will display when the page is loaded.-->

<script type="module">
  import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
  // book_reviews is the endpoint
  const url = uri + '/api/book_reviews';
  const resultContainer = document.getElementById("result");
  // fetch to my API
  fetch("http://127.0.0.1:8086/api/book_reviews/", options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      if (response.status !== 200) {
          const errorMsg = 'Database response error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
      }
      response.json().then(data => {
          console.log(data);
          // creates table with data
          for (const row of data) {
            const tr = document.createElement("tr");
            const title = document.createElement("td");
            const review = document.createElement("td");
            const rating = document.createElement("td");
            title.innerHTML = row.title;
            review.innerHTML = row.review;
            rating.innerHTML = row.rating;
            tr.appendChild(title);
            tr.appendChild(review);
            tr.appendChild(rating);
            resultContainer.appendChild(tr);
          }
      })
  })
  .catch(err => {
    console.error(err);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err + ": " + url;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  });
</script>