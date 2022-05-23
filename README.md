
# Greedy Gorilla - Budget Tracker

## Topic introduction:
The Greedy Gorilla is a full-stack React Web Application with MongoDB that helps users track their expenses and set budgets. This allows them to stay on track and save money.

The app was created as a way to help people save money in the face of rising consumer world inflation. The features of the app are: tracking expenses for multiple users, categorizing expenses, and setting budgets for each user. Fastify framework was chosen to develop the backend for expense management and authentication as together with protected routes it provided high security and fast operability for such sensitive data as money spending. The app also allows an easy way to add new users and manage permissions. This project focuses on creating a web application that will allow users to record their expenses and track how much money they spend. Moreover, the user will be able to have a better understanding of which categories they spend the most money on (visually presented on a pie chart) and which share of their budget is left to be spent for the current month.
## Used technologies, architectures, main libraries:
The following technologies were researched and implemented during the project course:

Frontend:
* JavaScript
* HTML5, CSS
Backend:
* NodeJS
* MongoDB

A budget-tracking application called Greedy Gorilla is a React web application that communicates with the NodeJS microservice which uses MongoDB to store data. The main functionality of the app is concentrated on one page following the current design best practices, only sign-in and sign-up are located on separate pages.

The following design patterns are used as best practices in building React application: stateless and controlled components and react hooks.
Libraries used in the project include:

Frontend:
* React
* Bootstrap
Backend:
* Fastify
* JWT
## Features and use-cases:
Frontend: 
* View, add, edit, remove expense,
* Sort expenses by categories
* Calculating the percentage of the spent and remaining budget. 
* Display on a graph spending by categories.

Backend: 
* registration, sign in
* CRUD (Create, Read, Update, Delete) user data 

## Expected results and experience:
The technologies listed above were learned from zero to the level that allowed to create a functioning application. The finished product is intended to be intuitive to use. An example user can be created to demonstrate the work of the application. 


## Screenshots
General view of spendings to date + setting the budget and adding expenses:
![App Screenshot](https://user-images.githubusercontent.com/36957053/169812106-8cee0d6f-51b9-40dc-aea3-04b592e0353c.png)

Detailed expense view + statistics by category:
![App Screenshot](https://user-images.githubusercontent.com/36957053/169812153-19617000-f2c7-4a0c-89ca-a7a24aa7ec24.png)

Sign-in:
![App Screenshot](https://user-images.githubusercontent.com/36957053/169812251-af7eb29f-7ea6-4004-b020-ea818ab19473.png)

Sign-up:
![App Screenshot](https://user-images.githubusercontent.com/36957053/169812287-fb78c9f4-94ce-4b05-94d3-fd9cf6efddff.png)

To run the project both frontend and backend parts have to be started:
### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


