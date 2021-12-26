const { User } = require('../../models');
const { Unauthorized } = require('http-errors');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !user.comparePassword(password)) {
            throw new Unauthorized('Email or password is wrong')
        }

        const { _id } = user;
        const token = user.createToken();
        await User.findByIdAndUpdate(_id, { token });
        res.json({
            token,
            user: {
                email: user.email,
                subscription:user.subscription
            }
        })
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = login;