const { Router, Request } = require("express");
const BaseController = require("../BaseController");
const UserRepository = require('./auth.repository');


class AuthController extends BaseController {
    router = Router();
    constructor() {
        super();
        this.userRepository = new UserRepository();
    }
    init = app => {
        this.router.post('/signUp', this.signUp);
        app.use('/api/auth/', this.router)
    }

    signUp = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await this.userRepository.createUser({ email, password });
            res.status(201).json(user);
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Error creating user' });
        }
    }
}
const authController = new AuthController();
module.exports = AuthController;

