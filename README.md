# MyGamesCollection
# I. Introduction
Welcome to MyGamesCollection (MGC), a place where you can search to find your favorite games and rate/review those games. You can also view the reviews and ratings of your friend's favorite games. The goal of this project is to connect with people and to see what games you and your friends enjoy, as well as what you don't enjoy, and why. As such it should facilitate discussion of games. This web application can not only keep track of what users think of games in the moments that they are played, so that they can be compared and ranked against other games. This website is mobile-friendly and supports web browser for on ios/android. 
# II. Background
* This is the frontend repository for MyGamesCollection.   
* For the backend repository, use this link: https://github.com/XNickyChenX2022/Rating-App-Backend
* For the website, use this link: https://xnickychenx2022.github.io/MyGamesCollection/
* Frontend Technologies: React, Redux-Toolkit, Tailwind CSS
* Frontend hosted on: GitHub Pages
* Backend Technologies: MongoDB, Mongoose, Node.js, Express.js, Redis 
* Backend hosted on: Render
* All game data is provided by IGDB games.
# III. MyGamesCollection Overview
MGC includes the following pages:
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
* RTK Query makes API calls to the backend, cache the data on the client and manually updating that data via pessimistic update to avoid constantly calling the backend API to fetch data
* Implements React-Router-Dom including private routing, which prevents access to routes that require user authentication, and routes that are only accessible between friends.
* automatically redirects users to default route if not logged in.
# IV. Backend
* see https://github.com/XNickyChenX2022/Rating-App-Backend
# V. Motivation
The motivation of the project is the fact that I have been always been interested in video games and was always interested in discussing and ranking games. But it was always inconvenient when one forgot what it felt like to be playing a game at that very moment. Of course, one can write that in google sheets for instance, but that also comes with organizing issues and just does not look appealing. So this application solves that issue by using React and Tailwind to build out appealing website that can have individuals sort and search games. The goal of this project was never to replicate a game review website such as Metacritic, but rather to personalize it between you and your friends. I also found that it was easier to communicate the thoughts of your games when individuals could do it on their own time and then discuss it later when both individuals has a understanding of each other's point of view.
# VI. What did I learn?
Aside from learning the MERN stack, I found the most challenging things to be the things that are not specific to each individual component. What I mean by that is that the hardest parts of the project were not the individual pieces of the stack(ex. MongoDB, React, etc...), but rather how to link all the pieces together. For instance, in development, I used a proxy to ignore the issue with cors. But when it came to deployment in which the API and the static files would be deployed separately, I faced many issues with having the client call the API. Then, I preceded to run into issues with cookies not being accepted by external websites that are necessary for this app to function. In other words, I didn't find using express for API endpoints or react to build components as the hardest parts, but rather what happens when these two things need to communicate. I also learned about caching and concerned by the fact that things would be too slow, I made sure to optimise where I could. The decision to scrape the IGDB API instead of serving the data from the data directly from API, made only logical sense as it let me control the flow of data and not be restricted by API rate limits. Instead of calling the backend whenever the cliented needed data regarding the friends or games, I used caching so that the backend would not be constantly called every time a person needed a friend's list. In essence the backend is only called initially and everytime on reload, and when updating the cache data on the frontend.
# VII. Notes
* For issues or concerns regarding this project, please email me at nickychen2022@gmail.com
* Please note, this application uses cookies for user authentication so features blocking cookies such as "Prevent cross-site tracking" or "Block all cookies" must be disabled if on ios/android.
