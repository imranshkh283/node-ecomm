const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
    last_name: {
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
    mobile: {
        type: Number,
        required: false,
        trim: true,
        minlength: 10
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    passwordResetToken: {
        type: String,
        required: false
    },
    passwordResetExpires: {
        type: Date,
        required: false
    }
}, {
    timestamps: true,
});

userSchema.index({ email: 1 });

userSchema.pre('save', async function (next) {
    // if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
    // }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;