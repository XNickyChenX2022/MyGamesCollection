# MyGamesCollection
# I. Introduction
Welcome to MyGamesCollection (MGC), a place where you can search to find your favorite games and rate/review those games.  
This is the frontend repository for MyGamesCollection.   
For the backend repository, use this link: https://github.com/XNickyChenX2022/Rating-App-Backend
For the website, use this link:https://xnickychenx2022.github.io/MyGamesCollection/
Frontend Technologies: React, Redux-Toolkit, Tailwind CSS
Frontend hosted on: GitHub Pages
Backend Technologies: MongoDB, Mongoose, Node.js, Express.js, Redis 
Backend hosted on: Render
# II. MyGamesCollection
* MGC includes the following pages:
* default (sends users to login/register)
* login
* register
* home (instructions page on how to use the website
* search games (search games from a database to add or remove from your collection)
* my games (rate and review user's collection of games)
* friends (send friend requests to users and view friend's collection of games)
* profile (edit username, password, email)
# III. Frontend
* Redux Toolkit stores user data in local storage 
* RTK Query makes api calls to the backend, cachse the data on the client and manually updating that data via pessimistic update to avoid constantly calling the backend api to fetch data
* Implements React-Router-Dom to private routing, which includes prevent access to routes that require user login, and routes that are only accessible between friends.
* automatically redirects users to default route if not logged in.
# IV. Backend
* see https://github.com/XNickyChenX2022/MyGamesCollection
