const { Router } = require("express");
const BaseController = require("../BaseController");
const AuthRepository = require('./auth.repository');
const { generateToken } = require('@utils/jwtUtils');


class AuthController extends BaseController {
    router = Router();
    constructor() {
        super();
    }
    init = app => {
        this.router.post('/signUp', this.signUp);
        this.router.post('/signIn', this.signIn);
        app.use('/api/auth/', this.router)
    }

    signUp = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await AuthRepository.createUser({ email, password });
            res.status(201).json(user);
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Error creating user' });
        }
    }

    signIn = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await AuthRepository.signIn({ email, password });
            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const comparePassword = await user.comparePassword(password)

            if (!comparePassword) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const _user = {
                email: user.email,
                id: user._id
            }

            const token = generateToken(_user);

            res.status(200).json({
                _user,
                token
            });

        } catch (err) {
            console.error('Error signing in:', err);
            res.status(500).json({ error: 'Error signing in' });
        }
    }
}
const authController = new AuthController();
module.exports = AuthController;

