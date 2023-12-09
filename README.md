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
  - React.js
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
- Install all npm packages in frontend and backend
- MongoDB server running
- Create your .env file in the root dir with the following format:
  ```
  NODE_ENV = development
  PORT = 5000
  MONGO_URI = <mongo_connection_string>
  JWT_SECRET = <jwt_secret_string>
  ```
    ```
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = <mongo_connection_string>
    JWT_SECRET = <jwt_secret_string>
    ```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/yugioh-card-creator.git
   cd yugioh-card-creator
