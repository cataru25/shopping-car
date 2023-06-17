# shopping-cart
The back-end of an online store made with express and mongoose

This is a shopping cart project developed using Node.js, Express, and Mongoose. The main goal of this project is to provide a basic solution for managing a shopping cart in a web application.

## Features

- User Registration: Users can create an account to access the shopping cart.
- Login: Registered users can log in to manage their shopping cart and make purchases.
- Add Products: Users can search for products and add them to the shopping cart.
- Update Quantity: Users can adjust the quantity of products in their cart.
- Remove Products: Users can delete products from their shopping cart.
- Place Orders: Users can confirm and place an order for the products in their cart.

## Prerequisites

Before running this project, make sure you have the following installed in your development environment:

- Node.js: [Download Node.js](https://nodejs.org)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Setup

Follow these steps to set up and run the project:

1. Clone this repository to your local machine.
```shell
git clone https://github.com/your-username/shopping-cart.git

2. Open a terminal and navigate to the project directory.
```shell
cd shopping-cart

3. Run the following command to install the dependencies:
```shell
npm install

4. Create a .env file in the project's root directory and provide the following configuration.
```shell
DB_CONNECTION_STRING=<mongodb_connection_string>
SESSION_SECRET=<session_secret>

Make sure to replace <mongodb_connection_string> with your own MongoDB connection string and <session_secret> with an alphanumeric string for the session.

5. Start the application.
```shell
npm start

6. Open your web browser and visit http://localhost:3000 to access the shopping cart.

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork this repository.
2. Create a branch for the new feature:
```shell
git checkout -b new-feature
3. Make your changes and commit:
```shell
git commit -m "Add new feature"
4. Push your changes to the remote repository:
```shell
git push origin new-feature
5. Open a Pull Request on this repository.

## Contact

If you have any questions or suggestions related to this project, feel free to contact me via email at youremail@example.com.
I hope this updated version helps you initialize the project in a local environment using the typical Node.js commands! Let me know if there's anything else I can assist you with.

THANKS!!!

[![Mi primer workflow](https://github.com/cataru25/shopping-cart/actions/workflows/main.yml/badge.svg)](https://github.com/cataru25/shopping-cart/actions/workflows/main.yml)
