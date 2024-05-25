const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const BACKEND_JWT_SECRET = process.env.BACKEND_JWT_SECRET || 'BACKEND_JWT_SECRET';

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email
    };
    const options = {
        expiresIn: '60h'
    };
    const secret = BACKEND_JWT_SECRET;

    return jwt.sign(payload, secret, options);
};

const verifyToken = (token) => {
    const secret = BACKEND_JWT_SECRET;
    return jwt.verify(token, secret);
};

module.exports = {
    hashPassword,
    generateToken,
    verifyToken,
};