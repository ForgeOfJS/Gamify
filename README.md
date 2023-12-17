# Yu-Gi-Oh! Card Creator Web App

## Overview

This repository contains the source code for a web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to create custom Yu-Gi-Oh! cards and manage them through user accounts.

## Features

- **User Authentication:** Users can create accounts, log in, and log out securely.
- **Card Creation:** Duelists can design custom Yu-Gi-Oh! cards, specifying attributes like card name, type, attack, defense, etc.
- **Card Management:** Duelists can view, edit, and delete their created cards.
- **Responsive Design:** The application is designed to work seamlessly across various devices.
- **Card Trading** Duelists can trade their custom cards with other Duelists, sending requests and accepting/rejecting requests for trades.

## Current Pages
![The Dashboard of the Web App.](/images/Dashboard.png "Current Dashboard Page.")

![The Login page of the Web App.](/images/Login.png "Current Login Page.")

![The Register page of the Web App.](/images/Register.png "Current Register Page.")

## Technologies Used

- **Frontend:**
  - React
  - Redux for state management
  - Axios for handling API requests

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database storage
  - JWT for user authentication

## Getting Started
Deployment is coming soon!
### Prerequisites

- Node.js and npm installed
- MongoDB server running


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ForgeOfJS/Card-App.git
   ```

2. Create your .env file with the following format:
    ```
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = <mongo_connection_string>
    JWT_SECRET = <jwt_secret_string>
    ```

3. Install all packages in backend, frontend and root directories:
    ```
    cd backend
    npm install
    cd ..
    ```

    ```
    cd frontend
    npm install
    cd ..
    ```

    ```
    npm install
    ```

4. Run the following command to run both front end and back end using concurrently
    ```
    npm run dev
    ```

Thank you for checking out my repo! At this point will continue development until deployed through possibly Microsoft Azure :^)
