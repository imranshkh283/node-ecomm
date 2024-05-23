# Node E-commerce Application

A simple Node.js e-commerce application using Express, Mongoose, and JWT for authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- JWT-based authentication
- Product management (CRUD operations)
- Order management (CRUD operations)
- Middleware for logging, CORS, and body parsing
- Mongoose ODM for MongoDB

## Prerequisites

- Node.js (>= 14.x)
- MongoDB (>= 4.x)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/imranshkh283/node-ecomm.git
    cd node-ecomm
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root of the project and add the following environment variables:

    ```env
    PORT=4000
    MONGODB_URI=mongodb://localhost:27017/ecomm
    BACKEND_JWT_SECRET=your_jwt_secret
    ```

2. Ensure MongoDB is running on your system.

## Usage

1. Start the application:

    ```bash
    npm start
    ```

2. The server will start on `http://localhost:4000`.

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user and get a JWT

### Products

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Get a single product by ID
- `PUT /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Delete a product by ID

### Orders

- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get a single order by ID
- `PUT /api/orders/:id` - Update an order by ID
- `DELETE /api/orders/:id` - Delete an order by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, improvements, or new features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License.
