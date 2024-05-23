const User = require('../user/user.model');


class UserRepository {
    constructor() { }

    createUser = async () => {
        const _user = {
            email: "imran@gmail.com",
            password: "123456"
        };
        const user = new User(_user);
        return await user.save();
    }
}

module.exports = UserRepository;