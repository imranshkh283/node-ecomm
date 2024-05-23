const User = require('./user.model');

class UserRepository {
    constructor() { }

    static async createUser({ email, password }) {

        const user = new User({ email, password });
        return await user.save();
    }

    static async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    static async getUserById(id) {
        return await User.findById(id);
    }

    static async isEmailExists(email) {
        return await User.exists({ email });
    }

}

module.exports = UserRepository;