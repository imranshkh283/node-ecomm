const mongoose = require("mongoose")

module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/cart');
    if (app) {
        app.set('mongoose', mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}