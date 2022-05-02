# Strider General Store React App

This project renders detailed information about purchases made at the Strider General Store.

![Screenshot of home screen](/client/src/assets/images/strider-home-screen.png)

![Screenshot of receipt screen](/client/src/assets/images/strider-receipt-screen.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

Home screen displays previews of order receipts.
Click on a preview to see more details. The detailed receipt includes a data table to easily view and understand receipt information.
Click the back button to navigate back to the home button.
Search using the search bar to filter receipt previews by order id, customer id or customer name. An error message appears when there are no matches.

## Technologies

This application uses React, React Hooks, Javascript, Material-UI, and React Router.

## How to Use

To run this application, first run the server then the client. There are also tests feature on the client. See below for further details:

### `Run the App`

#### `1. Run the server`

Type npm start to run the server.
It runs just the app server on [http://localhost:8000](http://localhost:8000)

#### `2.a. Run the client`

Navigate to the client folder in a new terminal.  
Run the command npm start.
It runs just the app client on [http://localhost:3000](http://localhost:3000)
If you would like to run tests instead, see 2.b. below.

#### `2.b. Test the client`

Navigate to the client folder in a new terminal.  
Run the command npm test.
It runs tests on the app client in the interactive watch mode.
