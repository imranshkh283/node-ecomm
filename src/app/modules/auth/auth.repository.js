const Auth = require("./auth.model")
const UserRepository = require('../user/user.repository');
const { exists } = require("../user/user.model");
const generateOtp = require("@utils/generateOtp");
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
            await user.comparePassword(password);
            return user;
        }
    }

    static async forgotPassword(email) {

        const isEmailExists = await UserRepository.isEmailExists(email);

        const otp = generateOtp();

        if (isEmailExists) {

            const saveOtp = await Auth.create({ email, otp, type: 'FORGOT_PASSWORD' });
            return saveOtp;
        }
    }

    static async verifyOtp(email, otp) {

        const otpExists = await Auth.find({ email, otp, type: 'FORGOT_PASSWORD' });
        return otpExists;
    }

    static async resetPassword(email, password, otp) {

        const isOtpExists = await AuthRepository.verifyOtp(email, otp);

        // Wait for both operations to complete
        const [isEmailExists, isOtpValid] = await Promise.all([
            isOtpExists.filter(user => user.email === email),
            isOtpExists.filter(user => user.otp === otp)
        ]);

        console.log({ isEmailExists, isOtpValid });

        await UserRepository.updatePassword(email, password);
    }
}

module.exports = AuthRepository;