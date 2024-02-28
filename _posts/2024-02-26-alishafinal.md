---
comments: True
layout: post
title: ☆ Trimester 2 Final - Alisha
type: ccc
courses: { csp: {week: 24 }}
---

## Project Overview

My team's project is a Southern California real estate site. Upon login, the user is met with a wide database of luxury houses in the SoCal area. Each house has further detail information about the house, along with an 'add to favorites' button. The favorites attribute is the primary feature that I focused on. For this feature, I had to create a new section of our API that focused on saving the user's selection. The user can choose their top house choices that will be stored in the favorites page.

### My key commits: 
[create favorites](https://github.com/Real-Estate-Analyzation/RealEstateFrontend/commit/70b062ec7ba64f891ee9ec78137f93affe2efbac), [fixed some errors](https://github.com/Real-Estate-Analyzation/RealEstateFrontend/commit/09c7e6e70cb115e2cacdc585b0390fcede9c4df3)

## Team and Individual Planning
[link to issue](https://github.com/Real-Estate-Analyzation/RealEstateFrontend/issues/20)

## More depth/detail Work
[link to issue](https://github.com/Real-Estate-Analyzation/RealEstateFrontend/issues/17#issuecomment-1962855374)

## CPT Requirements Implementation

| Requirement                                | Explanation                                                                              |
|--------------------------------------------|------------------------------------------------------------------------|
| Instructions for input from the user        | User input occurs when the "add to favorites" button is clicked, triggering the addition of the house to the favorites database. |
| Use of at least one list (or other collection type) | The collection used is the database of houses, specifically comprised of the user's favorite picks. When the user adds a house, their option will show up on the SQLite database, demonstrating that the house is added into the user's database. <img width="463" alt="Screenshot 2024-02-26 at 10 58 42 PM" src="https://github.com/TDWolff/AtlasIndex/assets/39902320/0f01b3f0-09f5-43fe-8e64-c2f7cd031732">|
| At least one procedure contributing to the program’s intended purpose | A procedure is implemented to create the favorites page. <img width="744" alt="Screenshot 1" src="https://github.com/Real-Estate-Analyzation/RealEstateFrontend/assets/39902320/4de4e1c3-bc5c-4208-8e81-111bdc0dea4e">|
| Algorithm with sequencing, selection, and iteration | The algorithm renders the favorites page upon each user addition, involving database recreation, demonstrating iteration. <img width="522" alt="Screenshot 2" src="https://github.com/Real-Estate-Analyzation/RealEstateFrontend/assets/39902320/82e5251e-a9ff-4cb7-9df4-fd44a2746bfc">|
| Calls to your student-developed procedure   | The function calls the `renderFavorites` procedure.  <img width="490" alt="Screenshot 3" src="https://github.com/Real-Estate-Analyzation/RealEstateFrontend/assets/39902320/b06e2ffd-1cbc-43b5-9803-c6b4c6746356">|
| Instructions for output                     | The "add to favorites" button on the house details page redirects to the favorites page, displaying the output. <img width="430" alt="Screenshot 4" src="https://github.com/Real-Estate-Analyzation/RealEstateFrontend/assets/39902320/ff43f7d3-ef2a-4281-93ea-e4fd34d9a825">|

## [Feature Video](https://youtu.be/-59Q6wQGQX4)