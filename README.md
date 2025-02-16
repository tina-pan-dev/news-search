## Notes

Bootstrapped with **create-next-app**.<br>

Project files are divided into four components:
* `Article`
* `ArticleList`
* `Section`
* `SearchBar`

A search API helper module is located in `util/SearchApiHelper.js`.

## Features
App takes user input to search for articles in the `Content` endpoint of the Guardian api

The following features are included: 
* Article elements display *title* and *publication date* (formatted as DD/MM/YYYY)
* Article title is clickable, and opens the article in a new browser tab
* Real-time search results - modeled on Google's Instant Search feature circa 2010-2017
* Search results are displayed by the section ascribed to the articles by the Guardian
