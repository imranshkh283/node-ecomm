const User = require('../user/user.model');


class UserRepository {
    constructor() { }

    createUser = async ({ email, password }) => {
        console.log({ email, password });
        console.log(email, password);
        // const _user = {
        //     email: "imran@gmail.com",
        //     password: "123456"
        // };
        // const user = new User(_user);
        // return await user.save();
    }
}

module.exports = UserRepository;