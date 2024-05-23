const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { registerRoutes } = require("./routes/routes")
class App {
    app;

    constructor() {
        this.app = express();
        registerRoutes(this.app);
        this.middleware();
    }

    middleware = () => {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(bodyParser.json())
    }
}

module.exports = new App().app