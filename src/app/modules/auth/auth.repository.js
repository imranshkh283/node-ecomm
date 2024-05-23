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

    static async signIn({ email, password }) {

        const user = await UserRepository.getUserByEmail(email);

        if (user) {
            const comparePassword = await user.comparePassword(password);
        }

        return user;
    }

}

module.exports = AuthRepository;