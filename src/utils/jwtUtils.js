const jwt = require('jsonwebtoken');

const BACKEND_JWT_SECRET = process.env.BACKEND_JWT_SECRET || 'BACKEND_JWT_SECRET';

const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email
    };
    const options = {
        expiresIn: '1day'
    };
    const secret = BACKEND_JWT_SECRET;

    return jwt.sign(payload, secret, options);
};

const verifyToken = (token) => {
    const secret = BACKEND_JWT_SECRET;
    return jwt.verify(token, secret);
};

module.exports = {
    generateToken,
    verifyToken
};