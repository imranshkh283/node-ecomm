const User = require('./user.model');

class UserRepository {
    constructor() { }

    static async createUser({ email, password }) {

        const user = new User({ email, password });
        return await user.save();
    }

}

module.exports = UserRepository;