const User = require('../user/user.model');

class AuthRepository {
    constructor() { }

    createUser = async ({ email, password }) => {

        const user = new User({ email, password });
        return await user.save();
    }

}

module.exports = AuthRepository;