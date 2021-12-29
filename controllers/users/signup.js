const { User } = require('../../models');
const { Conflict } = require('http-errors');
const { v4 } = require('uuid');
const gravatar = require('gravatar');
const { sendEmail } = require('../../helpers');

const signup = async (req, res) => {
    try {
        const { email, password, subscription } = req.body;
        const avatarURL = gravatar.url(email)
        const user = await User.findOne({ email });
        if (user) {
            throw new Conflict('Email in use');
        }

        const verifyToken = v4();

        const newUser = new User({ email,avatarURL, subscription,verifyToken});
        newUser.setPassword(password);
        await newUser.save();

        const data = {
            to: newUser.email,
            subject: "Подтверждение регистрации на сайте",
            html: `<a href="http://localhost:3000/api/users/verify/${verifyToken}" target="_blank">Click here for confirmation your email</a>`
        };
        await sendEmail(data);
        res.status(201).json({
            status: 'success',
            code: 201,
            data: {
                user: {
                    email: newUser.email,
                    subscription: newUser.subscription,
                    avatarURL: newUser.avatarURL,
                    verifyToken:newUser.verifyToken
                }
            }
        })
    } catch (error) {
        throw new Conflict('Email or password is wrong')
    }
}

module.exports = signup;