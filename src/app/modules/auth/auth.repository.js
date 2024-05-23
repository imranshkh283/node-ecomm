const UserRepository = require('../user/user.repository');
class AuthRepository {
    constructor() { }

    static async createUser({ email, password }) {

        const emailExists = await UserRepository.isEmailExists(email);
        if (emailExists) {
            throw new Error('Email already exists');
        }
        const user = await UserRepository.createUser({ email, password });
        return user;
    }

}

module.exports = AuthRepository;