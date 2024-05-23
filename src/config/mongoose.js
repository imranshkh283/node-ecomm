const mongoose = require('mongoose');

module.exports = (app) => {
    const dbURI = 'mongodb://localhost:27017/cart'; // Adjust the URI as necessary

    mongoose.connect(dbURI).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to ');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });
};