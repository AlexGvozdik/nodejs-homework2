const { User } = require('../../models');

const logout = async (req, res) => {
    try {
        const { _id } = req.user;
        await User.findByIdAndUpdate(_id, { token: null });
        res.status(204);
    } catch (error) {
        throw new error
    }
}

module.exports = logout;
