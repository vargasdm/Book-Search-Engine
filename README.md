# Book-Search-Engine

## Description

The motivation for this project was to create a book search engine app that will allow you to search books, as well as save them. This way I, as a reader, can find books I have read or are going to read in a list to refer to in the future. This was also practice creating my first MERN stack application and display the skills I have learned so far.

During this project I learned: 
- how to change RESTful API routes in Mongodb/mongoose routes
- using React methods such as useState, useEffect, useMutation, useQuery to restructure my queries and routes
- how to implement context into my React application
- using react-router to dynamically route my single-page React application
- howto implement JSON Web Token to securely send singin information for use in the application
- how to use the cache to hold data in my application


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

First, you will need to clone this repository to your local machine. The repository should already contain the package.json file in the root, client, and server directories as well as the package-lock.json file. This application requires you to have the following dependencies:

Root Directory:
- concurrently

Server Directory:
- graphql
- bcrypt
- express
- jsonwebtoken
- mongoose
- apollo-server-express

Client Directory:
- bootstrap 
- react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- jwtdecode
- @apollo/client

The dependedcies can be installed by opening the terminal in the root directory and entering "npm install". The user will be able to check the package.jason file and find the dependencies. In order to bundle the applications assets and build the client of the application the user will need to enter "npm run build" in the root terminal. Lastly, to run the application, the user will have to enter "npm run develop" in the root terminal.

## Usage

This application can be used to search for books that you are interested in, as well as keep track of them. When the application is opened, the landing page contains a search bar where the user is able to search for any book. There are also navigation tabs that will bring the user to the page that contains the search bar and another that will allow the user to either login or sign up. If the user decides the sign up, they will be prompted to enter a username, email, and password. After the information is entered, the user is logged in and a new navigation tab is displayed. If a user already has an account they can just enter thier email and password in order to be logged in. The saved books tab allows the user to look at the books that they have saved for later. When a user searches for a book, they are shown books that match the query that they entered. Each book shows an image, title, authors, and a description. When you are logged in a save button renders under the book, which when clicked, adds the book to the users list of saved books. When the user goes to the saved book tab they are shown all of the books that they saved. There is also a delete button that when clicked, removes the book from the users saved book list. The application is deployed using GitPages. 

The deployed Heroku application can be view at: https://floating-dusk-47990.herokuapp.com/

## Credits

I followed these links and tutorials in the completion of this project:

- https://sentry.io/answers/unique-key-prop/#:~:text=The%20Solution,to%20any%20of%20its'%20children.&text=React%20uses%20the%20key%20prop,component%20and%20the%20DOM%20element
- https://stackoverflow.com/questions/55846641/react-hook-usestate-is-called-in-function-app-which-is-neither-a-react-funct
- https://www.apollographql.com/docs/react/data/queries/

## License

No license is used for this project.
