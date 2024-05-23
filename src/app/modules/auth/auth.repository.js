const UserRepository = require('../user/user.repository');
class AuthRepository {
    constructor() { }

    static async createUser({ email, password }) {
        const user = await UserRepository.createUser({ email, password });
        return user;
    }

}

module.exports = AuthRepository;