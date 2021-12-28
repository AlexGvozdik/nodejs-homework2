const { User } = require('../../models');
const { Conflict } = require('http-errors');
const gravatar = require('gravatar');

const signup = async (req, res) => {
    try {
        const { email, password, subscription } = req.body;
        const avatarURL = gravatar.url(email)
        const user = await User.findOne({ email });
        if (user) {
            throw new Conflict('Email in use');
        }
        const newUser = new User({ email,avatarURL, subscription });
        newUser.setPassword(password);
        await newUser.save();

        res.status(201).json({
            user: {
                email: newUser.email,
                subscription: newUser.subscription,
                avatarURL:newUser.avatarURL
            }
        })
    } catch (error) {
        throw new Conflict('Email or password is wrong')
    }
}

module.exports = signup;