const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { registerRoutes } = require("./routes")
class App {
    app;

    constructor() {
        this.app = express();
        this.middleware();
        registerRoutes(this.app);
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}

module.exports = new App().app