const User = require('./user.model');
const { hashPassword } = require('@utils/jwtUtils');
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

        const emailExists = await User.exists({ email });
        return !!emailExists;
    }

    static async updatePassword(email, password) {
        const hashPassword = await hashPassword(password)
        return await User.findOneAndUpdate({ email }, { password });
    }

}

module.exports = UserRepository;