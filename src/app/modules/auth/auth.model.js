const mongoose = require('mongoose');
const { create } = require('../user/user.model');

const authSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 3
    },
    otp: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['VERIFY_EMAIL', 'VERIFY_MOBILE', 'FORGOT_PASSWORD'],
        required: true
    },
}, {
    timestamps: true,
})

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;